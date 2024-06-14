"use client";
import { useDeleteAccount } from "@/api/auth/use-delete-account";
import { Button } from "@/components/ui/button";

export default function DeleteAccount() {
	const { mutate } = useDeleteAccount();
	const handleDeleteAccount = () => {
		mutate();
	};
	return (
		<div className="w-5/12">
			<div className="mb-3">
				<h1>Delete Your Account</h1>
				<p className="text-red-800">Danger one, please be careful</p>
			</div>

			<Button
				type="submit"
				className="bg-white border-2 hover:bg-gray-200
                 hover:text-red-500  text-red-400 
                dark:bg-zinc-950 dark:text-red-500 font-medium border-1 border-zinc-200
                dark:border-gray-800 dark:hover:bg-gray-800 dark:hover:text-red-700
                w-[200px] h-[42px]
                "
				onClick={handleDeleteAccount}
			>
				Delete my account
			</Button>
		</div>
	);
}
