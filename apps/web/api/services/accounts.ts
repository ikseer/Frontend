import type { Patient } from "@/lib/types";
import type { AxiosInstance } from "axios";
import { httpNoAuth } from "../config/axios-non-auth";
import { http } from "../config/axios.client";
import {
	AccessTokenCookie,
	RefreshTokenCookie,
	UserIdCookie,
} from "../config/cookies.client";

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
		return await httpNoAuth.post("/accounts/login/", data).then((res) => {
			return res.data;
		});
	};

	logout = async () => {
		RefreshTokenCookie.delete();
		AccessTokenCookie.delete();
	};

	changePassword = async (data: {
		new_password1: string;
		new_password2: string;
	}) => {
		return this.http.post("/accounts/password/change/", data);
	};

	updatePassword = async (data: {
		old_password: string;
		new_password1: string;
		new_password2: string;
		id: string;
	}) => {
		return await this.http
			.post(`/accounts/password/change/${data.id}/`, data)
			.then((res) => res.data);
	};

	getPatient = async () => {
		const id = UserIdCookie.get();
		console.log("user id", id);
		return await this.http
			.get<Patient[]>("/accounts/patient/", {
				params: { user__id: id },
			})
			.then((res) => res.data);
	};

	updatePatient = async () => {
		const id = UserIdCookie.get();
		return await this.http.patch("/accounts/patient/", {
			params: { user__id: id },
		});
	};

	deletePatient = async () => {
		const id = UserIdCookie.get();
		return await this.http
			.delete("/accounts/patient/", { params: { user__id: id } })
			.then((res) => res.data);
	};

	getMyImage = async () => {
		const id = UserIdCookie.get();
		return await this.http.get(`/accounts/patient/${id}/image/`);
	};

	updateMyImage = async (data: Blob) => {
		const id = UserIdCookie.get();
		return await this.http.patchForm(`/accounts/patient/${id}/image/`, data);
	};
}
