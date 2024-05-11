import { getRequestConfig } from "next-intl/server";
import { notFound } from "next/navigation";
import { type locale, locales } from "./navigation";

export default getRequestConfig(async ({ locale }) => {
	if (!locales.includes(locale as locale)) notFound();
	return {
		messages: {
			...(await import(`./messages/${locale}.json`)).default,
			...(await import(`./messages/zod/${locale}.json`)).default,
		},
	};
});