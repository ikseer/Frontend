"use client";

import { TimerCircularProgressBar } from "@/components/circular-progressbar";
import { ErrorMsg } from "@/components/error-msg";
import { useZodForm } from "@/lib/use-zod-form";
import { useOtp, useResendOtp } from "@ikseer/api/hooks/accounts";
import { getErrorMessageSync } from "@ikseer/lib/get-error-msg";
import { Button } from "@ikseer/ui/components/ui/button";
import {
	FormControl,
	FormField,
	FormItem,
	FormMessage,
} from "@ikseer/ui/components/ui/form";
import {
	InputOTP,
	InputOTPGroup,
	InputOTPSlot,
} from "@ikseer/ui/components/ui/input-otp";
import { useTranslations } from "next-intl";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import { FormProvider } from "react-hook-form";
import { z } from "zod";
import { useRegisterContext } from "../context/RegisterContext";

const schema = z.object({
	otp: z.string().min(6).max(6),
});

export function RegisterSecondStep() {
	const $t = useTranslations();
	const t = useTranslations("Register");
	const { triggerFunction } = useRegisterContext();
	const [isResetTimer, setIsResetTimer] = useState(false);

	const form = useZodForm({
		schema: schema,
	});

	const confirmOtp = useOtp({
		onSuccess() {
			triggerFunction?.current?.click();
		},
	});

	const resendOtp = useResendOtp({
		onSuccess() {
			setIsResetTimer(true);
		},
	});
	const searchParams = useSearchParams();
	const userEmail = searchParams.get("email");
	const errorMsg = getErrorMessageSync(confirmOtp.error, $t);

	useEffect(() => {
		if (userEmail) {
			setIsResetTimer(true);
		}
	});

	return (
		<FormProvider {...form}>
			<form
				onSubmit={form.handleSubmit((data) => {
					confirmOtp.mutate(data);
				})}
				className="flex flex-col items-center justify-center py-10 space-y-6 text-center "
			>
				<section className="space-y-2">
					<h1 className="text-2xl font-semibold">{t("confirm-your-email")}</h1>
					<p className="text-zinc-700 dark:text-zinc-100 ">
						{t(
							"please-enter-the-code-sent-to-your-email-it-expires-after-10-minutes",
						)}
					</p>
					{errorMsg && <ErrorMsg>{errorMsg}</ErrorMsg>}
				</section>
				<FormField
					control={form.control}
					name="otp"
					render={({ field }) => (
						<FormItem>
							<FormControl>
								<InputOTP maxLength={6} {...field}>
									<InputOTPGroup className="m-auto text-center min-w-fit">
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
					<p className="text-center">{t("dont-get-the-code")}</p>
					<section className="flex flex-col items-center gap-y-5">
						<div className="gap-x-2 w-[400px] grid grid-cols-2">
							<Button type="submit">{t("submit")}</Button>
							<Button
								type="button"
								onClick={() => {
									resendOtp.mutate(userEmail as string);
								}}
							>
								{t("resend")}
							</Button>
						</div>
						<TimerCircularProgressBar
							isResetTimer={isResetTimer}
							setIsResetTimer={setIsResetTimer}
						/>
					</section>
				</section>
			</form>
		</FormProvider>
	);
}
