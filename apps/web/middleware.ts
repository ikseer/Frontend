import createIntlMiddleware from "next-intl/middleware";
import type { NextRequest } from "next/server";
import { locales } from "./navigation";

const intlMiddleware = createIntlMiddleware({
	locales,
	localePrefix: "as-needed",
	defaultLocale: "en",
});
export function middleware(req: NextRequest) {
	return intlMiddleware(req as unknown as NextRequest);
}

export const config = {
	matcher: ["/((?!api|_next|.*\\..*).*)"],
};
