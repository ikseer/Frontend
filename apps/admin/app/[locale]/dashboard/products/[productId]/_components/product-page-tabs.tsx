"use client";

import type { Product } from "@ikseer/lib/types";
import { Tabs, Text } from "@mantine/core";

export function ProductPageTabs({ product }: { product: Product }) {
	return (
		<Tabs>
			<Tabs.List>
				<Tabs.Tab value="details">Details</Tabs.Tab>
				<Tabs.Tab value="images">Images</Tabs.Tab>
				<Tabs.Tab value="coupons">Coupons</Tabs.Tab>
			</Tabs.List>
			<Tabs.Panel value="details">
				<Text>{product.name}</Text>
				<Text>{product.description}</Text>
			</Tabs.Panel>
			<Tabs.Panel value="images">Images</Tabs.Panel>
			<Tabs.Panel value="coupons">Coupons</Tabs.Panel>
		</Tabs>
	);
}
