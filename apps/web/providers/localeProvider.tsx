import { NextIntlClientProvider, useMessages, useTimeZone } from "next-intl";
import type { FC, PropsWithChildren } from "react";

export const LocaleProvider: FC<PropsWithChildren> = ({ children }) => {
	return <NextIntlClientProvider>{children}</NextIntlClientProvider>;
};
