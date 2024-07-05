import { serverAPI } from "@ikseer/api/utils/api.server";
import { Box } from "@mantine/core";
import DashboardHeader from "./_components/header";

export default async function Dashboard() {
	const stats = await serverAPI.accounts.getStatistics();
	return (
		<Box>
			<DashboardHeader stats={stats} />
		</Box>
	);
}
