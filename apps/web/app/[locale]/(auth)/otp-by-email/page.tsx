"use client";
import { useZodForm } from "@/lib/use-zod-form";
import { Button } from "@ikseer/ui/components/ui/button";
import { useTranslations } from "next-intl";
import { FormProvider } from "react-hook-form";
import { z } from "zod";
import AuthContainer from "../register/auth-container";
import "../register/register.css";
import { ErrorMsg } from "@/components/error-msg";
import Spinner from "@/components/spinner";
import { useRouter } from "@/navigation";
import { useResendOtp } from "@ikseer/api/hooks/accounts";
import { getErrorMessageSync } from "@ikseer/lib/get-error-msg";
import { otpTimer } from "@ikseer/lib/otp-time";
import { FormInput } from "@ikseer/ui/components/ui/input";

export default function ResetPassword() {
	const $t = useTranslations();
	const t = useTranslations("ResetPassword");
	const router = useRouter();
	const form = useZodForm({
		schema: z.object({
			email: z.string().email(),
		}),
	});

	const onSuccess = () => {
		otpTimer.set("120", "/");
		router.push(`/confirm-otp?email=${form.getValues().email}`);
	};

	const { mutate, isPending, error } = useResendOtp({ onSuccess });
	const errorMsg = getErrorMessageSync(error, $t);

	return (
		<main className="flex flex-col items-center justify-center auth-parent hero">
			<FormProvider {...form}>
				<AuthContainer>
					<form
						className="flex flex-col items-center justify-center space-y-6"
						noValidate
						onSubmit={form.handleSubmit((data) => mutate(data.email))}
						autoComplete="off"
					>
						<div className="flex flex-col items-center justify-center gap-y-2">
							<h1 className="text-2xl">Send your email</h1>
							<p className="text-zinc-900 dark:text-zinc-300 ">
								{t(
									"if-you-forgot-your-password-please-enter-your-email-below-to-rest-it",
								)}
							</p>
							{error && (
								<ErrorMsg className="flex items-center">{errorMsg}</ErrorMsg>
							)}
						</div>
						<FormInput
							name="email"
							className="rounded-md"
							placeholder="example@email.com"
						/>
						<Button variant="submit" disabled={isPending} className="w-full">
							{isPending ? (
								<>
									{" "}
									{t("reset-password")} &nbsp; <Spinner />{" "}
								</>
							) : (
								t("reset-password")
							)}
						</Button>
					</form>
				</AuthContainer>
			</FormProvider>
		</main>
	);
}
