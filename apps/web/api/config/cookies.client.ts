import Cookies from "js-cookie";

export const DOMAIN_COOKIE_KEY = "temp-domain";
export const WEBSITE_ID_COOKIE_KEY = "temp-website-id";
// TODO: separate the locale detection for each website

export const ACCESS_TOKEN_KEY = "the-access-token";
export const REFRESH_TOKEN_KEY = "the-refresh-token";
export const USER_ID_KEY = "the-user-id";

export const AccessTokenCookie = createCookieStorage(ACCESS_TOKEN_KEY);
export const RefreshTokenCookie = createCookieStorage(REFRESH_TOKEN_KEY);
export const UserIdCookie = createCookieStorage(USER_ID_KEY);

const THREE_DAYS_ms = 1000 * 60 * 60 * 24 * 3;

function createCookieStorage(COOKIE_KEY: string) {
	return {
		set: (data: string, rootPath: string) => {
			Cookies.set(COOKIE_KEY, data, {
				expires: new Date(Date.now() + THREE_DAYS_ms),
				path: rootPath,
			});
		},
		get: () => {
			const data = Cookies.get(COOKIE_KEY);
			if (data) return data;
		},
		delete: () => {
			Cookies.remove(COOKIE_KEY);
		},
	};
}
