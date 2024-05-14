"use client";
import { usePhoneNumber } from "@/api/auth/useRegister";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import { PhoneInput } from "react-international-phone";
import "react-international-phone/style.css";
//@ts-ignore
import { PhoneNumberUtil } from "google-libphonenumber";
import { useTranslations } from "next-intl";
import { Controller, useForm } from "react-hook-form";

export function RegisterThridStep() {
	const router = useRouter();
	const { mutate } = usePhoneNumber();
	const {
		handleSubmit,
		formState: { errors },
		control,
	} = useForm();

	const phoneUtil = PhoneNumberUtil.getInstance();
	const isPhoneValid = (phone: string) => {
		try {
			return phoneUtil.isValidNumber(phoneUtil.parseAndKeepRawInput(phone));
		} catch {
			return false;
		}
	};
	const t = useTranslations("Register");
	return (
		<form
			className="flex flex-col items-center justify-center py-10"
			onSubmit={handleSubmit((data) => {
				// biome-ignore lint/complexity/noUselessLoneBlockStatements: <explanation>
				{
					/*@ts-ignore */
					/*@ts-ignore */
				}
				mutate(data);
			})}
		>
			<section className="w-2/3 space-y-5">
				<div className="space-y-2">
					<h1 className="dark:text-white text-4xl text-center">
						{t("phone-number")}
					</h1>
					<p className="text-sm text-center">
						{t("phone-number-is-required-for-main-features-in-the-app")}
					</p>
				</div>
				<div className="space-y-1">
					<Controller
						name="phone"
						control={control}
						rules={{
							validate: (value) => isPhoneValid(value),
						}}
						render={({ field: { onChange, value } }) => (
							<PhoneInput
								value={value}
								onChange={onChange}
								defaultCountry="eg"
								inputClassName="w-full"
							/>
						)}
					/>
					{errors?.phone && (
						<p className="text-sm text-red-500">{t("invalid-phone")}</p>
					)}
				</div>
				<div className="space-y-2">
					<Button
						className="hover:bg-teal-700 w-full bg-teal-600"
						type="submit"
						disabled={!!errors?.phone}
					>
						{t("save-and-continue")}
					</Button>
					<Button
						type="button"
						className="w-full"
						onClick={() => router.push("/")}
					>
						{t("skip-for-now")}
					</Button>
				</div>
			</section>
		</form>
	);
}
