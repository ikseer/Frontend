import PrelineScript from "@/components/preline-script";
import { availableLocalesMap, defaultLocale } from "@/next.locales.mjs";
import { LocaleProvider } from "@/providers/locale-provider";
import { notFound } from "next/navigation";
import "./globals.css";
import { Toaster } from "@ikseer/ui/components/ui/toaster";
import type React from "react";
import { App } from "./_app";
import { Navbar } from "./_components/navbar";

interface RootLayoutProps {
	children: React.ReactNode;
	params: {
		locale: string;
	};
}

export const metadata = {
	title: "Ikseer - smart pharmacy",
	description:
		"An e-commerce platform for medical supplies with AI features and automation with hardware units.",
};

const locales = ["en", "ar"];

export default function RootLayout({
	children,
	params: { locale },
}: RootLayoutProps) {
	// biome-ignore lint/suspicious/noExplicitAny: I didn't find a way to fix it
	if (!locales.includes(locale as any)) notFound();

	const { langDir, hrefLang } = availableLocalesMap[locale] || defaultLocale;

	return (
		<html lang={hrefLang} dir={langDir}>
			<body>
				<LocaleProvider>
					<App
						attribute="class"
						defaultTheme="system"
						enableSystem
						disableTransitionOnChange
					>
						<Navbar />
						{children}
						<Toaster />
					</App>
				</LocaleProvider>
			</body>
			<PrelineScript />
		</html>
	);
}
