"use client";

import { usePermissions } from "@/hooks/use-permissions";
import { Card, Skeleton, Text } from "@mantine/core";
import { useTranslations } from "next-intl";

export default function DashboardHeader({
	stats,
}: {
	stats: {
		total_patients: number;
		total_doctors: number;
		total_pharmacies: number;
		total_products: number;
		total_orders: number;
	};
}) {
	const t = useTranslations("Dashboard");
	const perms = usePermissions();
	if (!perms.dashboard.canSeeStatistics()) return;
	return (
		<section className="flex flex-col gap-x-4 gap-y-8">
			<HeaderCard
				text={t("total-patients")}
				statistics={stats.total_patients}
			/>
			<HeaderCard text={t("total-doctors")} statistics={stats.total_doctors} />
			<HeaderCard
				text={t("total-products")}
				statistics={stats.total_products}
			/>
			<HeaderCard
				text={t("total-pharmacies")}
				statistics={stats.total_pharmacies}
			/>
			<HeaderCard text={t("total-orders")} statistics={stats.total_orders} />
		</section>
	);
}

function HeaderCard({
	text,
	statistics,
}: {
	text: string;
	statistics?: number;
}) {
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
