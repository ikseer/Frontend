import { Box } from "@mantine/core";
import DashboardHeader from "./_components/header";
import { serverAPI } from "@ikseer/api/utils/api.server";

export default async function Dashboard() {
	const stats = await serverAPI.accounts.getStatistics();
	return (
		<Box>
			<DashboardHeader stats={stats} />
		</Box>
	);
}
