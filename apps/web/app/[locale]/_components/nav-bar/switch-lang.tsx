"use client";
import { type Locale, usePathname, useRouter } from "@/navigation";
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "@ikseer/ui/src/components/ui/select";
import { useLocale } from "next-intl";

export function SwitchLang() {
	const router = useRouter();
	const pathname = usePathname();
	const locale = useLocale();

	const handleChange = (lang: Locale) => {
		router.replace(pathname, { locale: lang });
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
