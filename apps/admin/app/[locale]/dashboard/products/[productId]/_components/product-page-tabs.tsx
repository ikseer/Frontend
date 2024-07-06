"use client";

import type { Product } from "@ikseer/lib/types";
import { Tabs } from "@mantine/core";
import { ProductDetails } from "./product-details";
import { ProductDiscount } from "./product-discount";
import ProductImages from "./product-images";

export function ProductPageTabs({ product }: { product: Product }) {
	return (
		<Tabs defaultValue={"details"}>
			<Tabs.List mb="xl">
				<Tabs.Tab value="details">Details</Tabs.Tab>
				<Tabs.Tab value="images">Images</Tabs.Tab>
				<Tabs.Tab value="discount">Discount</Tabs.Tab>
			</Tabs.List>
			<Tabs.Panel value="details">
				<ProductDetails product={product} />
			</Tabs.Panel>
			<Tabs.Panel value="images">
				<ProductImages product={product} />
			</Tabs.Panel>
			<Tabs.Panel value="discount">
				<ProductDiscount product={product} />
			</Tabs.Panel>
		</Tabs>
	);
}
