"use client";

import { useZodForm } from "@/lib/uer-zod-schema";
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

const schema = z.object({
	pin: z.string().min(6).max(6),
});

export default function ConfirmPinCode() {
	const form = useZodForm({
		schema: schema,
	});
	const t = useTranslations("ConfirmPin");

	return (
		<Form {...form}>
			<form
				onSubmit={form.handleSubmit((data) => console.log(data))}
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
					</section>
					<FormField
						control={form.control}
						name="pin"
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
						<div className="space-y-4">
							<Button type="submit">{t("resent")}</Button>
							<div className="space-x-8">
								<Button type="submit">{t("back")}</Button>
								<Button type="submit">{t("submit")}</Button>
							</div>
						</div>
					</section>
				</AuthContainer>
			</form>
		</Form>
	);
}
