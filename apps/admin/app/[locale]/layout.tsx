import "@mantine/core/styles.css";
import "@mantine/notifications/styles.css";
import "./globals.css";

import { availableLocalesMap, defaultLocale } from "@/next.locales";
import { cn } from "@ikseer/lib/utils";
import { ColorSchemeScript } from "@mantine/core";
import { Notifications } from "@mantine/notifications";
import type { Metadata } from "next";
import { Inter, Noto_Kufi_Arabic } from "next/font/google";
import App from "./_app";
import { LocaleProvider } from "./_components/locale-provider";

const inter = Inter({ subsets: ["latin"] });
const noto = Noto_Kufi_Arabic({ subsets: ["arabic"] });

export const metadata: Metadata = {
	title: "Ikseer dashboard",
};

export default function RootLayout({
	children,
	params: { locale },
}: Readonly<{
	children: React.ReactNode;
	params: { locale: string };
}>) {
	const { langDir, hrefLang } = availableLocalesMap[locale] || defaultLocale;
	return (
		<html lang={hrefLang} dir={langDir} suppressHydrationWarning>
			<head>
				<ColorSchemeScript />
			</head>
			<body className={cn(inter.className, noto.className)}>
				<LocaleProvider>
					<App langDir={langDir}>
						<Notifications />
						{children}
					</App>
				</LocaleProvider>
			</body>
		</html>
	);
}
