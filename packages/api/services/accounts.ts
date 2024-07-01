import type {
	Doctor,
	PaginationResult,
	Patient,
	User,
} from "@ikseer/lib/types";
import type { AxiosInstance } from "axios";
import { z } from "zod";
import { httpNoAuth } from "../config/axios-non-auth";
import { getSearchParams } from "../config/get-search-params";
import type { SearchOptions } from "../config/types";

export class AccountsAPI {
	constructor(private http: AxiosInstance) {}

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
			.post("/accounts/verify-email-otp/", data)
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

	changePassword = async (data: {
		old_password: string;
		new_password1: string;
		new_password2: string;
		id: string;
	}) => {
		return await this.http
			.post(`/accounts/password/change/${data.id}/`, data)
			.then((res) => res.data);
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

	getPatient = async (patientId?: string) => {
		if (!patientId) return null;
		return await this.http.get<Patient>(`accounts/patient/${patientId}/`);
	};

	updatePatient = async (patientId: string | null) => {
		if (!patientId) return null;
		return await this.http.patch(`/accounts/patient/${patientId}/`);
	};

	deletePatient = async (patientId: string) => {
		return await this.http
			.delete(`/accounts/patient/${patientId}/`)
			.then((res) => res.data);
	};

	// -----------------------------------
	// Doctors
	// -----------------------------------

	createDoctor = async (data: z.infer<typeof doctorSchema>) => {
		return await this.http.post("accounts/doctor/", data);
	};

	getDoctors = async (options?: SearchOptions) => {
		const params = getSearchParams(options);
		return await this.http
			.get<PaginationResult<Doctor>>("/accounts/doctor/", {
				params,
			})
			.then((res) => res.data);
	};

	getDoctor = async (id?: string) => {
		if (!id) return null;
		return await this.http
			.get(`/accounts/doctor/${id}/`)
			.then((res) => res.data);
	};

	updateDoctor = async ({
		id,
		newData,
	}: {
		id: string;
		newData: z.infer<typeof doctorSchema>;
	}) => {
		return await this.http
			.post(`/accounts/doctor/${id}/`, newData)
			.then((res) => res.data);
	};

	deleteDoctor = async (id: string) => {
		return await this.http
			.delete(`/accounts/doctor/${id}/`)
			.then((res) => res.data);
	};
}

export const doctorSchema = z.object({
	first_name: z.string().min(2),
	last_name: z.string().min(2),
	email: z.preprocess((val) => val || undefined, z.string().optional()),
	specialization: z.string().min(2),
	gender: z.preprocess(
		(val) => val || undefined,
		z.literal("female").or(z.literal("male")).optional(),
	),
	license_number: z.preprocess(
		(val) => val || undefined,
		z.string().optional(),
	),
	experience_years: z.preprocess(
		(val) => val || undefined,
		z.number().optional(),
	),
	work_days: z.preprocess((val) => val || undefined, z.string().optional()),
	marital_status: z.preprocess(
		(val) => val || undefined,
		z.string().optional(),
	),
	bio: z.preprocess((val) => val || undefined, z.string().optional()),
	// address: z
	// 	.object({
	// 		street: z.string().optional(),
	// 		city: z.string().optional(),
	// 		governorate: z.string().optional(),
	// 	})
	// 	.optional(),
	// phone: z
	// 	.object({
	// 		mobile: z.preprocess(
	// 			(val) => val || undefined,
	// 			z.string().min(3).optional(),
	// 		),
	// 	})
	// 	.optional(),
	/** date in ISO format */
	date_of_birth: z.preprocess((val) => val || undefined, z.date().optional()),
});
