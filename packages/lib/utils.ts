import { type ClassValue, clsx } from "clsx";
import { forwardRef } from "react";
import { twMerge } from "tailwind-merge";
import { z } from "zod";
import { BACKEND_URL } from "./constants";
import type { HomeProduct, Product, User } from "./types";

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
	if (!link) return "https://i.suar.me/v3z85/m";
	const linkRegex = /^https?:\/\//;
	if (linkRegex.test(link)) return link;
	return `${BACKEND_URL}${link}`;
}

export function zFile(
	options: {
		maxUploadSize?: number;
		acceptedFileTypes?: string[];
	} = {},
) {
	return z
		.instanceof(File)
		.optional()
		.refine((file) => {
			return (
				!file ||
				options.maxUploadSize === undefined ||
				file.size <= options.maxUploadSize
			);
		}, "File size must be less than 3MB")
		.refine((file) => {
			return (
				!file ||
				options.acceptedFileTypes === undefined ||
				options.acceptedFileTypes.includes(file.type)
			);
		}, "Invalid file type");
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

export function getAvatarLink(user: User) {
	const linkRegex = /^https?:\/\//;
	return user?.image
		? linkRegex.test(user.image)
			? user?.image
			: `${BACKEND_URL}/files/download/${user?.image}`
		: `https://api.dicebear.com/8.x/shapes/png?seed=user-${user?.id}`;
}
