import { forwardRef } from "react";
import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import { BACKEND_URL } from "./constants";
import type { Product, HomeProduct } from "./types";

export function cn(...inputs: ClassValue[]) {
	return twMerge(clsx(inputs));
}

// source: https://www.totaltypescript.com/forwardref-with-generic-components
export function fixedForwardRef<T, P = Record<string, never>>(
	render: (props: P, ref: React.Ref<T>) => React.ReactNode,
) {
	return forwardRef(render) as (
		props: P & React.RefAttributes<T>,
	) => React.ReactNode;
}

export function getLink(link?: string) {
	if (!link) return "";
	const linkRegex = /^https?:\/\//;
	if (linkRegex.test(link)) return link;
	return `${BACKEND_URL}${link}`;
}

export function getDiscountAmount(product: Product | HomeProduct) {
	if (!product.discount.discount_amount || !product.price) return 0;
	let amount = 0;
	if (product.discount.discount_type === "amount")
		amount = Number.parseFloat(product.discount.discount_amount);
	else
		amount =
			(Number.parseFloat(product.discount.discount_amount) / 100) *
			product.price;
	return amount;
}

export function getDiscountdPrice(product: Product | HomeProduct) {
	const amount = getDiscountAmount(product);
	return ((product.price || 0) - amount).toFixed(2);
}
