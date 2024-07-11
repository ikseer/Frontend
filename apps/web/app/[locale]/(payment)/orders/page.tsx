"use client";
import NA from "@/components/NA";
import { ordersHooks } from "@ikseer/api/hooks/orders";
import { Skeleton } from "@ikseer/ui/components/ui/skeleton";
import {
	Table,
	TableBody,
	TableCaption,
	TableCell,
	TableHead,
	TableHeader,
	TableRow,
} from "@ikseer/ui/components/ui/table";

export default function ActiveOrders() {
	const { data } = ordersHooks.useList();
	if (!data)
		return (
			<div>
				<Skeleton />
			</div>
		);
	const activeOrders = data.results;

	return (
		<main className="page-container">
			<Table>
				<TableCaption>A list of your recent orders.</TableCaption>
				<TableHeader>
					<TableRow>
						<TableHead className="">First name</TableHead>
						<TableHead>Last name</TableHead>
						<TableHead>Phone</TableHead>
						<TableHead>Status</TableHead>
						<TableHead>Price</TableHead>
						<TableHead>zip code</TableHead>
						<TableHead>Payment</TableHead>
					</TableRow>
				</TableHeader>
				<TableBody>
					{activeOrders.map((order) => (
						<TableRow key={order.created_at}>
							<TableCell>
								<NA>{order.first_name}</NA>
							</TableCell>
							<TableCell>
								<NA>{order.last_name}</NA>
							</TableCell>
							<TableCell>
								<NA>{order.phone}</NA>
							</TableCell>
							<TableCell>
								<NA>{order.status}</NA>
							</TableCell>
							<TableCell>
								<NA>{order.total_price}</NA>
							</TableCell>
							<TableCell>
								<NA>{order.zip_code}</NA>
							</TableCell>
							<TableCell>
								{order.status === "processing" ? (
									<span className="font-bold text-teal-600">Paid</span>
								) : (
									<span className=" font-bold text-red-500">Unpaid</span>
								)}
							</TableCell>
						</TableRow>
					))}
				</TableBody>
			</Table>
		</main>
	);
}
