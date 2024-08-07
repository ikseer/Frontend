"use client";
import { cn } from "@ikseer/lib/utils";
import type { ReactNode } from "react";

export default function AuthContainer({
	children,
	className,
}: {
	children: ReactNode;
	className?: string;
}) {
	return (
		<main
			className={cn(
				"rounded-lg bg-zinc-100 dark:bg-zinc-950 max-w-[7000px] p-6 m-auto py-10",
				className,
			)}
			data-hs-stepper
		>
			{children}
		</main>
	);
}
