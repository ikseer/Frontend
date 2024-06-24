import Cookies from "js-cookie";

export const OTP_TIME_KEY = "otp-time";

export const otpTimer = createCookieStorage(OTP_TIME_KEY);

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
			if (data) return Number(data);
			return 0;
		},
		delete: () => {
			Cookies.remove(COOKIE_KEY);
		},
	};
}
