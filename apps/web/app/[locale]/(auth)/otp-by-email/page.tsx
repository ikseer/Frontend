"use client";
import { useZodForm } from "@/lib/use-zod-form";
import { Button } from "@ikseer/ui/src/components/ui/button";
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
import { FormInput } from "@ikseer/ui/src/components/ui/input";

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
		<main className="auth-parent hero flex flex-col items-center justify-center">
			<FormProvider {...form}>
				<AuthContainer>
					<form
						className="flex flex-col items-center justify-center space-y-6"
						noValidate
						onSubmit={form.handleSubmit((data) => mutate(data.email))}
						autoComplete="off"
					>
						<div className=" flex flex-col items-center justify-center">
							<h1 className="text-2xl">Send your email</h1>
							{errorMsg && (
								<ErrorMsg className="flex items-center">{errorMsg}</ErrorMsg>
							)}
						</div>
						<p className="text-zinc-900 dark:text-zinc-300 ">
							{t(
								"if-you-forgot-your-password-please-enter-your-email-below-to-rest-it",
							)}
						</p>
						<FormInput
							name="email"
							className="rounded-md"
							placeholder="example@email.com"
						/>
						<Button
							className="hover:bg-teal-700 bg-teal-600 min-w-[300px]"
							disabled={isPending}
						>
							{isPending ? <Spinner /> : t("reset-password")}
						</Button>
					</form>
				</AuthContainer>
			</FormProvider>
		</main>
	);
}
