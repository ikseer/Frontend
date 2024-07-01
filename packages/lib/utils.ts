import { type ClassValue, clsx } from "clsx";
import { forwardRef } from "react";
import { twMerge } from "tailwind-merge";
import { BACKEND_URL } from "./constants";
import type { HomeProduct, Product } from "./types";

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

export function getLink(link: string) {
	let newLink = link;
	if (!newLink) newLink = "https://i.suar.me/v3z85/m";
	if (!newLink) return "";
	const linkRegex = /^https?:\/\//;
	if (linkRegex.test(newLink)) return newLink;
	return `${BACKEND_URL}${newLink}`;
}

export function getDiscountAmount(product: Product | HomeProduct) {
	if (!product.discount?.discount_amount || !product.price) return 0;
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
