import type { patientSchema } from "@/api/patients";
import { type ComboboxItem, Select, TextInput } from "@mantine/core";
import type { UseFormReturnType } from "@mantine/form";
import { useLocale, useTranslations } from "next-intl";
import { useState } from "react";
import type { z } from "zod";
import {
	EgyptCities,
	EgyptGovernorate,
	type EgyptGovernorateKey,
} from "./form-data";

export default function AddressField({
	form,
}: {
	form: UseFormReturnType<z.infer<typeof patientSchema>>;
}) {
	const t = useTranslations("Forms");
	const locale = useLocale() as "ar" | "en";
	const [governorate, setGovernorate] = useState<string | null>(null);
	const [govKey, setGovKey] = useState<EgyptGovernorateKey | null>(null);
	const handleGovernorateChange = (
		value: string | null,
		_option: ComboboxItem,
	) => {
		if (!value) return;
		const index = EgyptGovernorate[locale].findIndex((item) => item === value);
		setGovKey(EgyptGovernorate.en[index] as EgyptGovernorateKey);
		setGovernorate(value);
		form.getInputProps("address.governorate").onChange(value);
	};
	return (
		<section>
			<label>{t("address")}</label>
			<div className="grid grid-cols-3 gap-x-2">
				<div className="flex items-center gap-x-2">
					<Select
						{...form.getInputProps("address.governorate")}
						placeholder={t("governorate")}
						data={EgyptGovernorate[locale]}
						value={governorate}
						onChange={handleGovernorateChange}
						nothingFoundMessage={t("nothing-found")}
						className="grow"
						searchable
					/>
					<span className="text-2xl">/ </span>
				</div>
				<div className="flex items-center gap-x-2">
					<Select
						{...form.getInputProps("address.city")}
						placeholder={t("status")}
						data={govKey ? EgyptCities[govKey][locale] : undefined}
						nothingFoundMessage={t("nothing-found")}
						className="grow"
						searchable
					/>
					<span className="text-2xl">/ </span>
				</div>
				<div className="flex gap-x-2">
					<TextInput
						{...form.getInputProps("address.street")}
						placeholder={t("street")}
						className="grow"
					/>
				</div>
			</div>
		</section>
	);
}
