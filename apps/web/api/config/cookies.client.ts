import Cookies from "js-cookie";

export const DOMAIN_COOKIE_KEY = "temp-domain";
export const WEBSITE_ID_COOKIE_KEY = "temp-website-id";
// TODO: separate the locale detection for each website
export const WEBSITE_LOCALE_KEY = "website-locale";
export const ACCESS_TOKEN_KEY = "the-access-token";
export const REFRESH_TOKEN_KEY = "the-refresh-token";
export const IMPERSONATE_REFRESH_TOKEN_KEY = "impersonate-refresh-token";
export const IMPERSONATE_ACCESS_TOKEN_KEY = "impersonate-access-token";

export const DomainCookie = createCookieStorage(DOMAIN_COOKIE_KEY);
export const TempWebsiteIdCookie = createCookieStorage(WEBSITE_ID_COOKIE_KEY);
export const WebsiteLocaleCookie = createCookieStorage(WEBSITE_LOCALE_KEY);
export const AccessTokenCookie = createCookieStorage(ACCESS_TOKEN_KEY);
export const RefreshTokenCookie = createCookieStorage(REFRESH_TOKEN_KEY);
export const ImpersonateAccessTokenCookie = createCookieStorage(
	IMPERSONATE_ACCESS_TOKEN_KEY,
);
export const ImpersonateRefreshTokenCookie = createCookieStorage(
	IMPERSONATE_REFRESH_TOKEN_KEY,
);

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
