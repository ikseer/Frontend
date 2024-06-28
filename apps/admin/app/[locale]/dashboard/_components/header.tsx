"use client";
import { usePermissions } from "@/hooks/use-permissions";
import { Card, Skeleton, Text } from "@mantine/core";
import { useTranslations } from "next-intl";

export default function DashboardHeader() {
	const t = useTranslations("Dashboard");
	const perms = usePermissions();
	if (!perms.dashboard.canSeeStatistics()) return;
	return (
		<section className="flex flex-col gap-x-4 gap-y-8">
			<HeaderCard text={t("total-patients")} statistics={234} />
			<HeaderCard text={t("total-doctors")} statistics={10} />
			<HeaderCard text={t("total-products")} statistics={10847} />
			<HeaderCard text={t("total-employees")} statistics={10} />
		</section>
	);
}

function HeaderCard({
	text,
	statistics,
}: { text: string; statistics?: number }) {
	return (
		<Card className="flex-1">
			<Text size="xl" fw="bold" c="cyan.6">
				{text}
			</Text>
			{statistics ? (
				<Text className="text-3xl">{statistics}</Text>
			) : (
				<Skeleton w={50}>
					<Text className="text-3xl invisible">.</Text>
				</Skeleton>
			)}
		</Card>
	);
}
