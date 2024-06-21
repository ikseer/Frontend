"use client";

// import { useUpdatePassword } from "@/api/hooks/auth";
import { Link } from "@/navigation";
import { Button } from "@ikseer/ui/src/components/ui/button";
import { FormInput } from "@ikseer/ui/src/components/ui/input";
import { FormProvider, useForm } from "react-hook-form";

interface changePasswordProps {
	old_password: string;
	new_password1: string;
	new_password2: string;
}

export default function ChangePassword() {
	const form = useForm<changePasswordProps>();
	// const { mutate } = useUpdatePassword();

	const handleChangePasswordSumbit = (data: changePasswordProps) => {
		console.log(data);
		// mutate(data);
	};

	return (
		<FormProvider {...form}>
			<form noValidate onSubmit={form.handleSubmit(handleChangePasswordSumbit)}>
				<h1>Change Password</h1>
				<FormInput
					name="old_password"
					placeholder="Old password"
					type="password"
				/>
				<FormInput
					name="new_password1"
					placeholder="New password"
					type="password"
				/>
				<FormInput
					name="new_password2"
					placeholder="Repeat password"
					type="password"
				/>
				<Button
					type="submit"
					className="mt-5 bg-white border-2 hover:bg-gray-200
        hover:text-zinc-500  text-teal-600 
        dark:bg-zinc-950 dark:text-zinc-400 font-medium border-1 border-zinc-200
        dark:border-gray-800 dark:hover:bg-gray-800 dark:hover:text-zinc-300 w-[150px] h-[42px]
        "
				>
					Reset
				</Button>
			</form>
		</FormProvider>
	);
}
