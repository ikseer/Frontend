import type { Doctor, Patient, User } from "@ikseer/lib/types";
import type { AxiosInstance } from "axios";
import { httpNoAuth } from "../config/axios-non-auth";
import type { SearchOptions } from "../config/types";
import { getSearchParams } from "../config/get-search-params";

export class AuthAPI {
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
			.post<{ access: string; refresh: string; user: User }>(
				"/accounts/login/",
				data,
			)
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
			.get<{ count: number; results: Patient[] }>("/accounts/patient/", {
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
		return await this.http.patch("/accounts/patient/", {
			params: { user__id: patientId },
		});
	};

	deletePatient = async (patientId: string) => {
		return await this.http
			.delete("/accounts/patient/", { params: { user__id: patientId } })
			.then((res) => res.data);
	};

	getPatientImage = async (patientId: string) => {
		return await this.http.get(`/accounts/patient/${patientId}/image/`);
	};

	updatePatientImage = async ({ id, data }: { id: string; data: Blob }) => {
		return await this.http.patchForm(`/accounts/patient/${id}/image/`, data);
	};

	// -----------------------------------
	// Doctors
	// -----------------------------------

	getDoctors = async (options: SearchOptions) => {
		const params = getSearchParams(options);
		return await this.http
			.get<{ count: number; results: Doctor[] }>("/accounts/doctor/", {
				params,
			})
			.then((res) => res.data);
	};

	getDoctor = async (doctorId?: string) => {
		if (!doctorId) return null;
		return await this.http
			.get(`/accounts/doctor/${doctorId}/`)
			.then((res) => res.data);
	};

	updateDoctor = async (doctorId: string) => {
		return await this.http
			.post("/accounts/doctor/", { params: { user__id: doctorId } })
			.then((res) => res.data);
	};

	deleteDoctor = async (doctorId: string) => {
		return await this.http
			.delete("/accounts/doctor/", { params: { user__id: doctorId } })
			.then((res) => res.data);
	};

	getDoctorImage = async (doctorId: string) => {
		return await this.http.get(`/accounts/doctor/${doctorId}/image/`);
	};

	updateDoctorImage = async ({ id, data }: { id: string; data: Blob }) => {
		return await this.http.patchForm(`/accounts/doctor/${id}/image/`, data);
	};
}
