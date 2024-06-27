import { forwardRef } from "react";
import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import { BACKEND_URL } from "./constants";

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
	const linkRegex = /^https?:\/\//;
	if (linkRegex.test(link)) return link;
	return `${BACKEND_URL}${link}`;
}
