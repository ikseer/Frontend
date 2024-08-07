"use client";
import { useZodForm } from "@/lib/use-zod-form";
import { useResetPassword } from "@ikseer/api/hooks/accounts";
import { Button } from "@ikseer/ui/components/ui/button";
import {
	Dialog,
	DialogContent,
	DialogDescription,
	DialogFooter,
	DialogHeader,
	DialogTitle,
	DialogTrigger,
} from "@ikseer/ui/components/ui/dialog";
import { FormInput } from "@ikseer/ui/components/ui/input";
import { Label } from "@ikseer/ui/components/ui/label";
import { Pen } from "lucide-react";
import { useState } from "react";
import { FormProvider } from "react-hook-form";
import { z } from "zod";

const schema = z
	.object({
		new_password1: z.string(),
		new_password2: z.string(),
	})
	.refine((data) => data.new_password1 === data.new_password2, {
		message: "Passwords do not match",
		path: ["new_password2"],
	});

export function ChangePasswordDialog() {
	const [isOpen, setIsOpen] = useState(false);
	const form = useZodForm({
		schema: schema,
	});

	const changePassword = useResetPassword({
		onSuccess: () => {
			setIsOpen(false);
		},
	});

	return (
		<Dialog open={isOpen} onOpenChange={setIsOpen}>
			<DialogTrigger asChild>
				<Button>
					<Pen /> &nbsp; Edit
				</Button>
			</DialogTrigger>
			<DialogContent className="sm:max-w-[425px]">
				<DialogHeader>
					<DialogTitle>Edit Password</DialogTitle>
					<DialogDescription>
						Make changes to your password here. Click save when you're done.
					</DialogDescription>
				</DialogHeader>
				<FormProvider {...form}>
					<form
						className="py-4 space-y-4"
						onSubmit={form.handleSubmit((data) => {
							changePassword.mutate(data);
						})}
					>
						<div className="grid items-center grid-cols-3 gap-4">
							<Label htmlFor="new_password1">New password</Label>
							<div className="col-span-2">
								<FormInput
									name="new_password1"
									placeholder="New password"
									type="password"
									className="rounded-md"
								/>
							</div>
						</div>
						<div className="grid items-center grid-cols-3 gap-4">
							<Label htmlFor="new_password2">Repeat password</Label>
							<div className="col-span-2">
								<FormInput
									name="new_password2"
									placeholder="Repeat password"
									type="password"
									className="rounded-md"
								/>
							</div>
						</div>
						<DialogFooter>
							<Button
								type="button"
								variant="danger"
								onClick={() => {
									setIsOpen(false);
								}}
							>
								cancel
							</Button>
							<Button type="submit" variant="submit">
								Save changes
							</Button>
						</DialogFooter>
					</form>
				</FormProvider>
			</DialogContent>
		</Dialog>
	);
}
