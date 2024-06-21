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

const schema = z.object({
	pin: z.string().min(6).max(6),
});
export function RegisterSecondStep() {
	const form = useZodForm({
		schema: schema,
	});
	const t = useTranslations("Register");
	return (
		<Form {...form}>
			<form
				onSubmit={form.handleSubmit((data) => console.log(data))}
				className=" flex flex-col items-center justify-center py-10 space-y-6"
			>
				<section className="space-y-2">
					<h1 className="text-2xl font-semibold text-center">
						{t("confirm-your-email")}
					</h1>
					<p className="text-zinc-700 dark:text-zinc-100 text-center">
						{t(
							"please-enter-the-code-sent-to-your-email-it-expires-after-10-minutes",
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
						<Button type="button">{t("resend")}</Button>
					</div>
				</section>
			</form>
		</Form>
	);
}
