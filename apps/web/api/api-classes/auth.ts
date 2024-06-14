import type { AxiosInstance } from "axios";
import {
	AccessTokenCookie,
	RefreshTokenCookie,
} from "../config/cookies.client";

export class Auth {
	constructor(private http: AxiosInstance) {}

	register = async (data: {
		username: string;
		email: string;
		firstName: string;
		lastName: string;
		password: string;
		gender: string;
	}) => {
		return await this.http
			.post("/accounts/register/", data)
			.then((res) => res.data);
	};

	otp = async () => {
		return await this.http
			.post("/accounts/verify-email-otp/")
			.then((res) => res.data);
	};

	phone = async (data: { phone: string }) => {
		return await this.http
			.post("/accounts/phone-register/")
			.then((res) => res.data);
	};

	login = async (data: { username: string; password: string }) => {
		return await this.http
			.post("/accounts/login/", data)
			.then((res) => res.data);
	};

	logout = async () => {
		RefreshTokenCookie.delete();
		AccessTokenCookie.delete();
	};

	resetPassword = async (data: { email: string }) => {
		return this.http.post("/accounts/password/reset/", data);
	};

	deleteMe = async ({ id }: { id: string }) => {
		return await this.http
			.delete(`/accounts/profile/${id}`)
			.then((res) => res.data);
	};
}
