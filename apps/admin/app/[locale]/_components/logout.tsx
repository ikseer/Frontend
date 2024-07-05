"use client";

import { Routes } from "@/lib/routes";
import { useRouter } from "@/navigation";
import { setSession } from "@ikseer/api/utils/session.client";
import { Button } from "@mantine/core";
import { useTranslations } from "next-intl";

export default function Logout({ width, mt }: { width?: string; mt?: string }) {
	const router = useRouter();
	const t = useTranslations("Forms");
	return (
		<Button
			w={width}
			mt={mt}
			variant="transparent"
			onClick={() => {
				setSession(null);
				router.push(Routes.login());
			}}
		>
			{t("logout")}
		</Button>
	);
}
