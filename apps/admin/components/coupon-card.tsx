"use client";

import type { ProductCoupon } from "@ikseer/lib/types";
import { cn } from "@ikseer/lib/utils";
import { ActionIcon, Button, Menu } from "@mantine/core";
import { Check, MoreHorizontal, Tag, Trash2, X } from "lucide-react";
import { useFormatter } from "next-intl";

export function CouponCard({
	coupon,
	onEdit,
}: { coupon: ProductCoupon; onEdit: () => void }) {
	const fmt = useFormatter();
	const discountAmount = Number.parseFloat(coupon.discount_amount).toFixed(2);
	return (
		<div className="relative bg-background dark:bg-slate-900 border border-muted rounded-lg shadow-lg overflow-hidden">
			<span
				className={cn(
					"absolute top-2 start-0 text-xs px-2 py-1 font-medium text-white",
					coupon.active ? "bg-green-600" : "bg-gray-600",
				)}
			>
				{coupon.active ? "ACTIVE" : "INACTIVE"}
			</span>
			<div className="p-4 pt-6 md:p-6 md:pt-8">
				<div className="flex items-center justify-between mb-2">
					<h3 className="text-lg font-semibold">
						{discountAmount}% Off Sitewide
					</h3>
					<div className="bg-primary text-primary-foreground px-2 py-1 rounded-md text-xs font-medium">
						Expires {fmt.dateTime(new Date(coupon.end_date))}
					</div>
				</div>
				<p className="text-muted-foreground text-sm mb-4">
					Enjoy {discountAmount}% off your entire purchase on our website. Valid
					on all products.
				</p>
				<div className="flex items-center justify-between">
					<div className="flex items-center gap-2">
						<Tag className="w-5 h-5 text-muted-foreground" />
						<span className="text-sm font-medium">{discountAmount}% OFF</span>
					</div>
					<div className="flex gap-2">
						<Button variant="outline" size="xs" onClick={onEdit}>
							Edit Coupon
						</Button>
						<Menu shadow="md" width={200}>
							<Menu.Target>
								<ActionIcon variant="outline">
									<MoreHorizontal />
								</ActionIcon>
							</Menu.Target>
							<Menu.Dropdown>
								<Menu.Label>Coupon actions</Menu.Label>
								<Menu.Item
									leftSection={coupon.active ? <X /> : <Check />}
									onClick={() => {
										alert("not implemented yet");
									}}
								>
									{coupon.active ? "Deactivate" : "Activate"}
								</Menu.Item>
								<Menu.Item
									c="red"
									leftSection={<Trash2 />}
									onClick={() => {
										if (
											confirm("Are you sure you want to delete the coupon?")
										) {
											alert("not implemented yet");
										}
									}}
								>
									Delete
								</Menu.Item>
							</Menu.Dropdown>
						</Menu>
					</div>
				</div>
			</div>
			<div className="border-t border-muted py-2 px-4 bg-muted/20 text-xs text-muted-foreground">
				Coupon Code: {coupon.code}
			</div>
		</div>
	);
}
