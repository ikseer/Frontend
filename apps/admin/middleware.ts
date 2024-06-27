import createMiddleware from "next-intl/middleware";
import { type NextRequest, NextResponse } from "next/server";
import { Routes, checkRouteType } from "./lib/routes";
import { defaultLocale } from "./next.locales";
import {
	AccessTokenServerCookie,
	UserTypeServerCookie,
} from "@ikseer/lib/cookies.server";

const intlMiddleware = createMiddleware({
	locales: ["en", "ar"],
	defaultLocale: defaultLocale.code,
	localePrefix: "as-needed",
});

export default function middleware(req: NextRequest) {
	const userType = UserTypeServerCookie.get();
	const accessToken = AccessTokenServerCookie.get();
	const pathname = req.nextUrl.pathname;

	if (!accessToken && !checkRouteType(pathname, "auth")) {
		return NextResponse.redirect(new URL(Routes.login(), req.url));
	}

	if (userType !== "ADMIN" && !checkRouteType(pathname, "auth"))
		return NextResponse.redirect(new URL(Routes.notAuthorized(), req.url));

	if (Routes.home.doesMatch(pathname))
		return NextResponse.redirect(new URL(Routes.dashboard(), req.url));

	return intlMiddleware(req);
}

export const config = {
	// Skip all paths that should not be internationalized
	matcher: ["/((?!api|_next|.*\\..*).*)"],
};
