"use client";

import type { ProductCoupon } from "@ikseer/lib/types";
import { Button } from "@mantine/core";
import { Tag } from "lucide-react";
import { useFormatter } from "next-intl";

export function CouponCard({ coupon }: { coupon: ProductCoupon }) {
	const fmt = useFormatter();
	const discountAmount = Number.parseFloat(coupon.discount_amount).toFixed(2);
	return (
		<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
			<div className="bg-background border border-muted rounded-lg shadow-lg overflow-hidden">
				<div className="p-4 md:p-6">
					<div className="flex items-center justify-between mb-2">
						<h3 className="text-lg font-semibold">
							{discountAmount}% Off Sitewide
						</h3>
						<div className="bg-primary text-primary-foreground px-2 py-1 rounded-md text-xs font-medium">
							Expires {fmt.dateTime(new Date(coupon.end_date))}
						</div>
					</div>
					<p className="text-muted-foreground text-sm mb-4">
						Enjoy {discountAmount}% off your entire purchase on our website.
						Valid on all products.
					</p>
					<div className="flex items-center justify-between">
						<div className="flex items-center gap-2">
							<Tag className="w-5 h-5 text-muted-foreground" />
							<span className="text-sm font-medium">{discountAmount}% OFF</span>
						</div>
						<Button variant="outline" size="sm">
							Edit Coupon
						</Button>
					</div>
				</div>
				<div className="border-t border-muted py-2 px-4 bg-muted/20 text-xs text-muted-foreground">
					Coupon Code: {coupon.code}
				</div>
			</div>
		</div>
	);
}
