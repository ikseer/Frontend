"use client";
import { useGetActiveOrders } from "@ikseer/api/hooks/orders";
import { Skeleton } from "@ikseer/ui/components/ui/skeleton";
import {
	Table,
	TableBody,
	TableCaption,
	TableCell,
	TableFooter,
	TableHead,
	TableHeader,
	TableRow,
} from "@ikseer/ui/components/ui/table";

export default function ActiveOrders() {
	const { data } = useGetActiveOrders();
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
				<TableCaption>A list of your recent invoices.</TableCaption>
				<TableHeader>
					<TableRow>
						<TableHead className="">Owner</TableHead>
						<TableHead>Phone</TableHead>
						<TableHead>Status</TableHead>
						<TableHead>Price</TableHead>
						<TableHead>Payment</TableHead>
					</TableRow>
				</TableHeader>
				<TableBody>
					{activeOrders.map((order) => (
						<TableRow key={order.created_at}>
							<TableCell className="gap-x-2 flex items-center font-medium">
								{order.owner}
							</TableCell>
							<TableCell>{order.phone}</TableCell>
							<TableCell>{order.status}</TableCell>
							<TableCell>{order.total_price}</TableCell>
							<TableCell>choose payment method</TableCell>
						</TableRow>
					))}
				</TableBody>
				<TableFooter>
					<TableRow>
						<TableCell colSpan={3}>Total</TableCell>
						{/* <TableCell className="text-right">{totalPrice}</TableCell> */}
					</TableRow>
				</TableFooter>
			</Table>
		</main>
	);
}
