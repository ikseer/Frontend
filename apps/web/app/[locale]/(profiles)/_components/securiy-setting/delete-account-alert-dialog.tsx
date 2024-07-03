"use client";
import { setSession } from "@ikseer/api/config/session.client";
import { useDeleteMe } from "@ikseer/api/hooks/accounts";
import { UserIdCookie, UserTypeCookie } from "@ikseer/lib/cookies.client";
import {
	AlertDialog,
	AlertDialogCancel,
	AlertDialogContent,
	AlertDialogDescription,
	AlertDialogFooter,
	AlertDialogHeader,
	AlertDialogTitle,
	AlertDialogTrigger,
} from "@ikseer/ui/components/ui/alert-dialog";
import { Button } from "@ikseer/ui/components/ui/button";
import { useState } from "react";

export function DeleteAccountDiaglog() {
	const [isOpen, setIsOpen] = useState(false);
	const onSuccess = () => {
		setIsOpen(false);
	};
	const deleteAccount = useDeleteMe({ onSuccess, method: "hard" });

	return (
		<AlertDialog open={isOpen} onOpenChange={setIsOpen}>
			<AlertDialogTrigger asChild>
				<Button variant="danger">Delete Account</Button>
			</AlertDialogTrigger>
			<AlertDialogContent>
				<AlertDialogHeader>
					<AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
					<AlertDialogDescription>
						This action cannot be undone. This will permanently delete your
						account and remove your data from our servers.
					</AlertDialogDescription>
				</AlertDialogHeader>
				<AlertDialogFooter>
					<AlertDialogCancel>Cancel</AlertDialogCancel>
					<Button
						variant="danger"
						onClick={() => {
							deleteAccount?.mutate();
							setSession(null);
							UserIdCookie.delete();
							UserTypeCookie.delete();
							window.location.href = "/login";
						}}
					>
						{deleteAccount?.isPending ? "Delete Account" : "Delete Account"}
					</Button>
				</AlertDialogFooter>
			</AlertDialogContent>
		</AlertDialog>
	);
}
