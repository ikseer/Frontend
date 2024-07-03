import type { Product } from "@ikseer/lib/types";

export function ProductDiscount({ product }: { product: Product }) {
	return `Discount of ${product.id}`;
}
