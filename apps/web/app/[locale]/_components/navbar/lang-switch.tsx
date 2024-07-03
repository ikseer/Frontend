"use client";
import { type Locale, usePathname, useRouter } from "@/navigation";
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "@ikseer/ui/components/ui/select";
import { useLocale } from "next-intl";
import { useSearchParams } from "next/navigation";

export function LangSwitch() {
	const router = useRouter();
	const pathname = usePathname();
	const locale = useLocale();
	const searchParams = useSearchParams();
	const handleChange = (newLocale: Locale) => {
		const currentSearchParams = new URLSearchParams(searchParams);
		const searchString = currentSearchParams.toString();
		router.replace(`${pathname}?${searchString}`, { locale: newLocale });
	};

	return (
		<Select onValueChange={(lang: Locale) => handleChange(lang)}>
			<SelectTrigger className="w-[180px]">
				<SelectValue
					placeholder={locale === "ar" ? "العربيه (مصر)" : "English(UK)"}
				/>
			</SelectTrigger>
			<SelectContent>
				<SelectItem value="ar">العربية (مصر)</SelectItem>
				<SelectItem value="en">English(UK)</SelectItem>
			</SelectContent>
		</Select>
	);
}
