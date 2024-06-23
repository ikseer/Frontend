"use client";

import { useOtp, useResendOtp } from "@/api/hooks/auth";
import { ErrorMsg } from "@/components/site/error-msg";
import { getErrorMsg } from "@/lib/get-error-msg";
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
import { useSearchParams } from "next/navigation";
import { z } from "zod";
import { useRegisterContext } from "../context/RegisterContext";

const schema = z.object({
	otp: z.string().min(6).max(6),
});
export function RegisterSecondStep() {
	const { triggerFunction } = useRegisterContext();
	const form = useZodForm({
		schema: schema,
	});
	const t = useTranslations("Register");

	const onSuccess = () => {
		triggerFunction?.current?.click();
	};

	const confirmEmail = useOtp({ onSuccess });
	const resendOtp = useResendOtp();
	const searchParams = useSearchParams();
	console.log(searchParams.get("email"));
	const errorMsg = getErrorMsg(confirmEmail.error)?.detail;

	return (
		<Form {...form}>
			<form
				onSubmit={form.handleSubmit((data) => {
					confirmEmail.mutate(data);
				})}
				className=" flex flex-col items-center justify-center py-10 space-y-6 text-center"
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
									<InputOTPGroup className="min-w-fit m-auto text-center">
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
					<div className="gap-x-2 flex">
						<Button type="submit">{t("submit")}</Button>
						<Button
							type="button"
							onClick={() => resendOtp.mutate("modyyousef800@gmail.com")}
						>
							{t("resend")}
						</Button>
					</div>
				</section>
			</form>
		</Form>
	);
}
