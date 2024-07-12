"use client";

import { QueryComponent } from "@/components/query-component";
import { ordersHooks } from "@ikseer/api/hooks/orders";
import type { OrderItem, VerboseOrder } from "@ikseer/lib/types";
import { Button } from "@ikseer/ui/components/ui/button";
import {
	Sheet,
	SheetContent,
	SheetFooter,
	SheetTrigger,
} from "@ikseer/ui/components/ui/sheet";
import jsPDF from "jspdf";
import { FileDownIcon } from "lucide-react";
import { useState } from "react";

const OrderSheet = ({
	orderId,
	children,
}: { orderId: string; children: React.ReactNode }) => {
	const [open, setOpen] = useState(false);
	const query = ordersHooks.useGetById(orderId, { enabled: open });
	return (
		<Sheet onOpenChange={setOpen}>
			<SheetTrigger>{children}</SheetTrigger>
			<SheetContent>
				<QueryComponent
					query={query}
					render={(order) => (
						<div className="max-w-2xl p-6 mx-auto rounded-lg shadow-lg">
							<h2 className="mb-4 text-xl font-bold" id="order-details">
								Order Details
							</h2>
							<div className="mb-4">
								<p>
									<strong>Name:</strong> {order.first_name} {order.last_name}
								</p>
								<p>
									<strong>Address:</strong> {order.street}, {order.zip_code},{" "}
									{order.location}
								</p>
								<p>
									<strong>Phone:</strong> {order.phone}
								</p>
								<p>
									<strong>Status:</strong> {order.status}
								</p>
								<p>
									<strong>Total Price:</strong> {order.total_price}
								</p>
							</div>
							<div>
								<h3 className="mb-2 text-lg font-semibold">Items</h3>
								<ul>
									{order.order_items.map((item) => (
										<ItemComponent key={item.id} item={item} />
									))}
								</ul>
							</div>
							<SheetFooter className="mt-4">
								<Button onClick={() => downloadOrderPDF(order)}>
									<FileDownIcon /> Download as PDF
								</Button>
							</SheetFooter>
						</div>
					)}
				/>
			</SheetContent>
		</Sheet>
	);
};

const ItemComponent = ({ item }: { item: OrderItem }) => {
	return (
		<li className="py-2 border-b">
			<p>
				<strong>Product:</strong> {item.product_details.name}
			</p>
			<p>
				<strong>Quantity:</strong> {item.quantity}
			</p>
			<p>
				<strong>Price:</strong> {item.product_details.price}
			</p>
		</li>
	);
};

function downloadOrderPDF(order: VerboseOrder) {
	const doc = new jsPDF();

	// Add product details
	let yPosition = 22;

	// Add title
	doc.setFontSize(18);
	doc.text("Prescription", 14, yPosition);

	yPosition += 20;
	doc.setFontSize(10);
	doc.setTextColor("gray");
	doc.text("CODE", 14, yPosition);
	doc.text("NAME", 50, yPosition);
	doc.text("QUANTITY", 170, yPosition);
	doc.setFontSize(12);
	doc.setTextColor("black");

	yPosition += 14;
	for (const item of order.order_items) {
		doc.text(String(item.product_details.code), 14, yPosition);
		doc.text(item.product_details.name, 50, yPosition);
		doc.text(String(item.quantity), 170, yPosition);
		yPosition += 10;
	}

	// Save the PDF
	doc.save("Ikseer-product-list.pdf");
}

export default OrderSheet;
