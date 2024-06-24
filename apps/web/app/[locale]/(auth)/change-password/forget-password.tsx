"use client";
import { useChangePassword } from "@/api/hooks/auth";
import Spinner from "@/components/site/spinner";
import { getErrorMsg } from "@/lib/get-error-msg";
import { useZodForm } from "@/lib/use-zod-schema";
import { useRouter } from "@/navigation";
import { Button } from "@ikseer/ui/src/components/ui/button";
import { FormInput } from "@ikseer/ui/src/components/ui/input";
import { FormProvider } from "react-hook-form";
import { z } from "zod";

export default function ForgetPasswordComponent() {
	const form = useZodForm({
		schema: z
			.object({
				new_password1: z.string().min(8).max(20),
				new_password2: z.string().min(8).max(20),
			})
			.refine((data) => data.new_password1 === data.new_password2, {
				message: "Passwords do not match",
				path: ["new_password2"],
			}),
	});
	const router = useRouter();
	const onSuccess = () => {
		router.push("/login");
	};

	const changePassword = useChangePassword({ onSuccess });
	const errorMsg = getErrorMsg(changePassword.error);
	console.log(errorMsg);

	return (
		<FormProvider {...form}>
			<form
				className="p-5 w-[550px] flex flex-col items-center justify-center space-y-5"
				onSubmit={form.handleSubmit((data) => {
					changePassword.mutate(data);
				})}
			>
				<h1 className="text-2xl font-semibold text-center">Reset Password</h1>
				<div className="w-full space-y-1">
					<label htmlFor="newPassword">New password</label>
					<FormInput
						type="password"
						name="new_password1"
						className="w-full rounded-md"
					/>
				</div>
				<div className="w-full space-y-1">
					<label htmlFor="confirmPassword">Confirm password</label>
					<FormInput
						type="password"
						name="new_password2"
						className="w-full rounded-md"
					/>
				</div>
				<Button
					type="submit"
					className="w-full text-lg"
					variant="submit"
					disabled={changePassword.isPending}
				>
					{changePassword.isPending ? <Spinner /> : "Confirm new password"}
				</Button>
			</form>
		</FormProvider>
	);
}
