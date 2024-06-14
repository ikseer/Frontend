import "server-only";
import { cookies } from "next/headers";
import {
	ACCESS_TOKEN_KEY,
	DOMAIN_COOKIE_KEY,
	REFRESH_TOKEN_KEY,
	WEBSITE_ID_COOKIE_KEY,
	WEBSITE_LOCALE_KEY,
} from "./cookies.client";

export const DomainServerCookie = createCookieStorage(DOMAIN_COOKIE_KEY);
export const TempWebsiteIdServerCookie = createCookieStorage(
	WEBSITE_ID_COOKIE_KEY,
);
export const WebsiteLocaleServerCookie =
	createCookieStorage(WEBSITE_LOCALE_KEY);
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
