"use client";

import { useZodForm } from "@/lib/use-zod-form";
import { Button } from "@ikseer/ui/src/components/ui/button";
import {
	FormControl,
	FormField,
	FormItem,
	FormMessage,
} from "@ikseer/ui/src/components/ui/form";
import {
	InputOTP,
	InputOTPGroup,
	InputOTPSlot,
} from "@ikseer/ui/src/components/ui/input-otp";
import { useTranslations } from "next-intl";
import { z } from "zod";
import AuthContainer from "../register/auth-container";
import "../register/register.css";
import { TimerCircularProgressBar } from "@/components/circular-progressbar";
import { ErrorMsg } from "@/components/error-msg";
import Spinner from "@/components/spinner";
import { Link, useRouter } from "@/navigation";
import { useOtp, useResendOtp } from "@ikseer/api/hooks/accounts";
import { getErrorMessageSync } from "@ikseer/lib/get-error-msg";
import { otpTimer } from "@ikseer/lib/otp-time";
import { useSearchParams } from "next/navigation";
import { useState } from "react";
import { FormProvider } from "react-hook-form";

const schema = z.object({
	otp: z.string().min(6).max(6),
});

export default function ConfirmPinCode() {
	const [isResetTimer, setIsResetTimer] = useState(false);
	const form = useZodForm({
		schema: schema,
	});
	const router = useRouter();
	const onSuccess = () => {
		router.push("/change-password");
	};
	const OtpOnSuccess = () => {
		setIsResetTimer(true);
	};
	const $t = useTranslations();
	const t = useTranslations("ConfirmPin");
	const confirmOtp = useOtp({ onSuccess });
	const resentOtp = useResendOtp({ onSuccess: OtpOnSuccess });
	const searchParams = useSearchParams();
	const userEmail = searchParams.get("email");
	const errorMsg = getErrorMessageSync(confirmOtp.error, $t);
	console.log(errorMsg);
	return (
		<FormProvider {...form}>
			<form
				onSubmit={form.handleSubmit((data) => {
					console.log(data);
					confirmOtp.mutate(data);
				})}
				className="flex items-center justify-center text-center auth-parent hero"
			>
				<AuthContainer className="space-y-6">
					<section className="space-y-2">
						<h1 className="text-2xl font-semibold">
							{t("verification-required")}
						</h1>
						<p className="w-5/6 m-auto text-zinc-700 dark:text-zinc-100">
							{t(
								"to-continue-complete-this-verification-step-weve-sent-a-code-to-your-email-please-enter-it-below",
							)}
						</p>
						<ErrorMsg>{errorMsg}</ErrorMsg>
					</section>
					<FormField
						control={form.control}
						name="otp"
						render={({ field }) => (
							<FormItem className="text-center">
								<FormControl>
									<InputOTP maxLength={6} {...field}>
										<InputOTPGroup className="m-auto min-w-fit">
											<InputOTPSlot index={0} />
											<InputOTPSlot index={1} />
											<InputOTPSlot index={2} />
											<InputOTPSlot index={3} />
											<InputOTPSlot index={4} />
											<InputOTPSlot index={5} />
										</InputOTPGroup>
									</InputOTP>
								</FormControl>
								<FormMessage />
							</FormItem>
						)}
					/>
					<section className="space-y-4">
						<p className="text-center">{t("didnt-get-the-code")}</p>
						<div className="space-y-4 w-[400px] m-auto">
							<Button
								type="submit"
								variant="submit"
								className="w-full"
								disabled={confirmOtp.isPaused}
							>
								{confirmOtp.isPending ? <Spinner /> : t("submit")}
							</Button>
							<div className="grid w-full grid-cols-2 space-x-8 ">
								<Button type="button">
									<Link href="/otp-by-email">{t("back")}</Link>
								</Button>
								<Button
									type="button"
									onClick={() => {
										otpTimer.set("120", "/");
										resentOtp.mutate(userEmail as string);
									}}
									disabled={resentOtp.isPending}
								>
									{resentOtp.isPending ? <Spinner /> : t("resent")}
								</Button>
							</div>
						</div>
						<TimerCircularProgressBar
							isResetTimer={isResetTimer}
							setIsResetTimer={setIsResetTimer}
						/>
					</section>
				</AuthContainer>
			</form>
		</FormProvider>
	);
}
