"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";
import type { IStaticMethods } from "preline/preline";
declare global {
	interface Window {
		HSStaticMethods: IStaticMethods;
	}
}

export default function PrelineScript() {
	const path = usePathname();
	// biome-ignore lint/correctness/useExhaustiveDependencies: <explanation>
	useEffect(() => {
		const loadPreline = async () => {
			await import("preline/preline");
			setTimeout(() => {
				if (window.HSStaticMethods) {
					window.HSStaticMethods.autoInit();
				}
			}, 200);
		};
		loadPreline();
	}, [path]);

	return null;
}
