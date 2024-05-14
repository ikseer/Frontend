"use client";
import { usePhoneNumber } from "@/customHooks/Auth/useRegister";
import { Button } from "@ikseer/ui/src/ui/button";
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
			className="flex flex-col justify-center items-center py-10"
			onSubmit={handleSubmit((data) => {
				mutate(data);
			})}
		>
			<section className="w-2/3 space-y-5">
				<div className="space-y-2">
					<h1 className="text-4xl dark:text-white text-center">
						{t("phone-number")}
					</h1>
					<p className="text-center text-sm">
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
						<p className="text-red-500 text-sm">{t("invalid-phone")}</p>
					)}
				</div>
				<div className="space-y-2">
					<Button
						className="bg-teal-600 hover:bg-teal-700 w-full"
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
