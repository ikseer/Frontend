"use client";
import { useZodForm } from "@/lib/uer-zod-schema";
import { Button } from "@ikseer/ui/src/ui/button";
import { FormInput } from "@ikseer/ui/src/ui/input";
import { FormProvider } from "react-hook-form";
import { z } from "zod";
export default function ForgetPasswordComponent() {
	const form = useZodForm({
		schema: z
			.object({
				newPassword: z.string().min(8).max(20),
				confirmPassword: z.string().min(8).max(20),
			})
			.refine((data) => data.newPassword === data.confirmPassword, {
				message: "Passwords do not match",
				path: ["confirmPassword"],
			}),
	});

	return (
		<FormProvider {...form}>
			<form
				className="p-5 w-[550px] flex flex-col items-center justify-center space-y-5"
				onSubmit={form.handleSubmit((data) => console.log(data))}
			>
				<h1 className="text-center text-2xl font-semibold">Reset Password</h1>
				<div className="space-y-1 w-full">
					<label htmlFor="newPassword">New password</label>
					<FormInput
						type="password"
						name="newPassword"
						className="rounded-md w-full"
					/>
				</div>
				<div className="space-y-1 w-full">
					<label htmlFor="confirmPassword">Confirm password</label>
					<FormInput
						name="confirmPassword"
						type="password"
						className="rounded-md w-full"
					/>
				</div>
				<Button
					type="submit"
					className="bg-teal-600 hover:bg-teal-700 text-zinc-800 dark:text-zinc-200 text-lg w-full"
				>
					Confirm new password
				</Button>
			</form>
		</FormProvider>
	);
}
