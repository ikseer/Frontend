"use client";

import { Routes } from "@/lib/routes";
import { useRouter } from "@/navigation";
import { setSession } from "@ikseer/api/config/session.client";
import { Button } from "@mantine/core";

export default function NotAuthorized() {
	const router = useRouter();
	return (
		<div className="grid place-content-center gap-2 h-screen">
			<p>You are not authorized to view the dashboard.</p>
			<Button
				onClick={() => {
					setSession(null);
					router.push(Routes.login());
				}}
			>
				Logout
			</Button>
		</div>
	);
}
