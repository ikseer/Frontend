import type {
	Doctor,
	PaginationResult,
	Patient,
	User,
} from "@ikseer/lib/types";
import type { AxiosInstance } from "axios";
import { z } from "zod";
import { httpNoAuth } from "../utils/axios-non-auth";
import { getSearchParams } from "../utils/get-search-params";
import type { SearchOptions } from "../utils/types";
import { CRUD_API } from "../utils/crud-api";
import { zNullish, zUsername } from "@ikseer/lib/utils";

export class AccountsAPI {
	users: CRUD_API<User, z.infer<typeof userSchema>>;
	doctors: CRUD_API<Doctor, z.infer<typeof doctorSchema>>;

	constructor(private http: AxiosInstance) {
		this.users = new CRUD_API("/accounts/users/", http);
		this.doctors = new CRUD_API("/accounts/doctor/", http);
	}

	getStatistics = async () => {
		return await this.http
			.get<{
				total_patients: number;
				total_doctors: number;
				total_pharmacies: number;
				total_products: number;
				total_orders: number;
			}>("/accounts/statistics/")
			.then((res) => res.data);
	};

	// ------------------------
	// Accounts
	// ------------------------

	checkUserName = async (username: string) => {
		return await httpNoAuth
			.post<{ username_exists: boolean }>("/accounts/check-username/", {
				username: username,
			})
			.then((res) => res.data);
	};

	checkEmail = async (email: string) => {
		return await httpNoAuth
			.post<{ email_exists: boolean }>("/accounts/check-email/", {
				email: email,
			})
			.then((res) => res.data);
	};

	register = async (data: {
		username: string;
		email: string;
		firstName: string;
		lastName: string;
		password: string;
		gender: string;
	}) => {
		const newData = {
			...data,
			first_name: data.firstName,
			last_name: data.lastName,
			password1: data.password,
			password2: data.password,
		};
		console.info(newData);
		return await httpNoAuth
			.post("/accounts/register/", newData)
			.then((res) => res.data);
	};

	otp = async (data: { otp: string }) => {
		return await httpNoAuth
			.post<{
				access: string;
				refresh: string;
				user: User;
				profile_id: string;
			}>("/accounts/verify-email-otp/", data)
			.then((res) => res.data);
	};

	resendOtp = async (email: string) => {
		return await httpNoAuth
			.post("/accounts/otp-by-email/", { email: email })
			.then((res) => res.data);
	};

	phone = async (phone: string) => {
		return await this.http
			.post("/accounts/phone-register/", { phone: phone })
			.then((res) => res.data);
	};

	login = async (data: { username: string; password: string }) => {
		return await httpNoAuth
			.post<{
				access: string;
				refresh: string;
				user: User;
				profile_id: string;
			}>("/accounts/login/", data)
			.then((res) => {
				return res.data;
			});
	};

	resetPassword = async (data: {
		new_password1: string;
		new_password2: string;
	}) => {
		return this.http.post("/accounts/password/change/", data);
	};

	// -----------------------------------
	// Patients
	// -----------------------------------

	getPatients = async (options?: SearchOptions) => {
		const params = getSearchParams(options);
		return await this.http
			.get<PaginationResult<Patient>>("/accounts/patient/", {
				params,
			})
			.then((res) => res.data);
	};

	getDeletedPatients = async (options?: SearchOptions) => {
		const params = getSearchParams(options);
		return await this.http
			.get<PaginationResult<Patient>>("/accounts/patient/deleted/", {
				params,
			})
			.then((res) => res.data);
	};

	getPatient = async (patientId?: string) => {
		if (!patientId) return null;
		return await this.http
			.get<Patient>(`accounts/patient/${patientId}/`)
			.then((res) => res.data);
	};

	updatePatient = async ({
		...data
	}: {
		id: string;
		first_name: string;
		last_name: string;
		gender: string;
		date_of_birth: string;
		timezone: string;
	}) => {
		if (!data.id) return null;
		return await this.http.patch(`/accounts/patient/${data.id}/`, data);
	};

	deletePatient = async (patientId: string, method?: "soft" | "hard") => {
		return await this.http
			.delete(`/accounts/patient/${patientId}/?method=${method}`)
			.then((res) => res.data);
	};

	restorePatient = async (id: string) => {
		return await this.http
			.post(`/accounts/deleted-patient/restore/${id}/`)
			.then((res) => res.data);
	};
}

export const userSchema = z.object({
	is_staff: z.boolean(),
	first_name: z.string().min(2),
	last_name: z.string().min(2),
	username: zUsername(),
	email: z.string().email(),
	user_type: z.enum(["doctor", "patient", "employee"]),
});

export const doctorSchema = z.object({
	first_name: z.string().min(2),
	last_name: z.string().min(2),
	email: zNullish(z.string().email()),
	location: zNullish(z.string()),
	specialization: z.string().min(2),
	approved: z.boolean(),
	bio: zNullish(z.string()),
	timezone: zNullish(z.coerce.string()),
	gender: zNullish(z.literal("female").or(z.literal("male"))),
	price_for_reservation: zNullish(z.coerce.number()),
	/** date in ISO format */
	date_of_birth: zNullish(z.coerce.date()),
});
