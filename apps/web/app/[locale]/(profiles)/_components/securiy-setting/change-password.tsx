"use client";

import { ChangePasswordDialog } from "./change-password-dialog";

export default function ChangePassword() {
	return (
		<section className="flex items-center justify-between">
			<h3 className="text-xl font-bold font-weight">Change Password</h3>
			<ChangePasswordDialog />
		</section>
	);
}
