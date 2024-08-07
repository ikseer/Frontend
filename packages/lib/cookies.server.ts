import "server-only";
import { cookies } from "next/headers";
import {
	ACCESS_TOKEN_KEY,
	PROFILE_ID_KEY,
	REFRESH_TOKEN_KEY,
	USER_ID_KEY,
	USER_TYPE_KEY,
} from "./cookies.client";
import type { UserType } from "./types";

export const RefreshTokenServerCookie = createCookieStorage(REFRESH_TOKEN_KEY);
export const AccessTokenServerCookie = createCookieStorage(ACCESS_TOKEN_KEY);
export const ProfileIdServerCookie = createCookieStorage(PROFILE_ID_KEY);
export const UserTypeServerCookie = createCookieStorage<UserType | "admin">(
	USER_TYPE_KEY,
);
export const UserIdServerCookie = createCookieStorage(USER_ID_KEY);

const THREE_DAYS_ms = 1000 * 60 * 60 * 24 * 3;

function createCookieStorage<T extends string>(COOKIE_KEY: string) {
	return {
		set: (data: T, rootPath: string) => {
			cookies().set(COOKIE_KEY, data, {
				expires: new Date(Date.now() + THREE_DAYS_ms),
				path: rootPath,
			});
		},
		get: () => {
			const data = cookies().get(COOKIE_KEY);
			if (data) return data.value as T;
		},
		delete: () => {
			cookies().delete(COOKIE_KEY);
		},
	};
}
