import "server-only";
import { cookies } from "next/headers";
import {
	ACCESS_TOKEN_KEY,
	REFRESH_TOKEN_KEY,
	USER_ID_KEY,
} from "./cookies.client";

export const UserIdCookie = createCookieStorage(USER_ID_KEY);
export const RefreshTokenServerCookie = createCookieStorage(REFRESH_TOKEN_KEY);
export const AccessTokenServerCookie = createCookieStorage(ACCESS_TOKEN_KEY);

const THREE_DAYS_ms = 1000 * 60 * 60 * 24 * 3;

function createCookieStorage(COOKIE_KEY: string) {
	return {
		set: (data: string, rootPath: string) => {
			cookies().set(COOKIE_KEY, data, {
				expires: new Date(Date.now() + THREE_DAYS_ms),
				path: rootPath,
			});
		},
		get: () => {
			const data = cookies().get(COOKIE_KEY);
			if (data) return data.value;
		},
		delete: () => {
			cookies().delete(COOKIE_KEY);
		},
	};
}
