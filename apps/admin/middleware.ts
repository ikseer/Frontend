import createMiddleware from "next-intl/middleware";
import { type NextRequest, NextResponse } from "next/server";
import { accessTokenCookie, userTypeTokenCookie } from "./lib/cookies.server";
import { Routes, checkRouteType } from "./lib/routes";
import { defaultLocale } from "./next.locales";

const intlMiddleware = createMiddleware({
	locales: ["en", "ar"],
	defaultLocale: defaultLocale.code,
	localePrefix: "as-needed",
});

export default function middleware(req: NextRequest) {
	const userType = userTypeTokenCookie.get();
	const accessToken = accessTokenCookie.get();
	const pathname = req.nextUrl.pathname;

	if (!accessToken && !checkRouteType(pathname, "auth")) {
		return NextResponse.redirect(new URL(Routes.login(), req.url));
	}

	if (userType !== "admin")
		return NextResponse.rewrite(new URL(`/random-${Math.random()}`, req.url)); // 404

	if (Routes.home.doesMatch(pathname))
		return NextResponse.redirect(new URL(Routes.dashboard(), req.url));

	return intlMiddleware(req);
}

export const config = {
	// Skip all paths that should not be internationalized
	matcher: ["/((?!api|_next|.*\\..*).*)"],
};
