"use client";

import { useZodForm } from "@/lib/use-zod-schema";
import { Button } from "@ikseer/ui/src/components/ui/button";
import {
	Form,
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
import { useOtp, useResendOtp } from "@/api/hooks/accounts";
import { TimerCircularProgressBar } from "@/components/site/circular-progressbar";
import { ErrorMsg } from "@/components/site/error-msg";
import Spinner from "@/components/site/spinner";
import { getErrorMsg } from "@/lib/get-error-msg";
import { otpTimer } from "@/lib/otp-time";
import { Link, useRouter } from "@/navigation";
import { useSearchParams } from "next/navigation";
import { useState } from "react";

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
	const t = useTranslations("ConfirmPin");
	const confirmOtp = useOtp({ onSuccess });
	const resentOtp = useResendOtp({ onSuccess: OtpOnSuccess });
	const searchParams = useSearchParams();
	const userEmail = searchParams.get("email");
	const errorMsg = getErrorMsg(confirmOtp.error);
	console.log(errorMsg);
	return (
		<Form {...form}>
			<form
				onSubmit={form.handleSubmit((data) => {
					console.log(data);
					confirmOtp.mutate(data);
				})}
				className="auth-parent hero flex items-center justify-center text-center"
			>
				<AuthContainer className="space-y-6">
					<section className="space-y-2">
						<h1 className="text-2xl font-semibold">
							{t("verification-required")}
						</h1>
						<p className="text-zinc-700 dark:text-zinc-100 w-5/6 m-auto">
							{t(
								"to-continue-complete-this-verification-step-weve-sent-a-code-to-your-email-please-enter-it-below",
							)}
						</p>
						{errorMsg && (
							<ErrorMsg>
								{typeof errorMsg.detail === "string" ? errorMsg.detail : ""}
							</ErrorMsg>
						)}
					</section>
					<FormField
						control={form.control}
						name="otp"
						render={({ field }) => (
							<FormItem className="text-center">
								<FormControl>
									<InputOTP maxLength={6} {...field}>
										<InputOTPGroup className="min-w-fit m-auto">
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
							<div className=" grid w-full grid-cols-2 space-x-8">
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
		</Form>
	);
}
