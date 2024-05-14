"use client";
import { useResetPassword } from "@/customHooks/Auth/useResetPassword";
import { useZodForm } from "@/lib/uer-zod-schema";
import { Button } from "@ikseer/ui/src/ui/button";
import { useTranslations } from "next-intl";
import { FormProvider } from "react-hook-form";
import { z } from "zod";
import AuthContainer from "../register/auth-container";
import "../register/register.css";
import { FormInput } from "@ikseer/ui/src/ui/input";

export default function ResetPassword() {
	const form = useZodForm({
		schema: z.object({
			email: z.string().email(),
		}),
	});

	const { mutate } = useResetPassword();

	const t = useTranslations("ResetPassword");

	return (
		<main className="auth-parent hero flex items-center justify-center flex-col">
			<FormProvider {...form}>
				<AuthContainer>
					<form
						className="flex flex-col items-center justify-center space-y-6"
						noValidate
						onSubmit={form.handleSubmit((data) => mutate(data))}
						autoComplete="off"
					>
						<h1 className="text-2xl">{t("reset-password")}</h1>
						<p className="text-zinc-900 dark:text-zinc-300 ">
							{t(
								"if-you-forgot-your-password-please-enter-your-email-below-to-rest-it",
							)}
						</p>
						<FormInput name="email" placeholder="example@email.com" />
						<Button className="bg-teal-600 hover:bg-teal-700">
							{t("reset-password")}
						</Button>
					</form>
				</AuthContainer>
			</FormProvider>
		</main>
	);
}