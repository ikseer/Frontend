import { cn } from "@ikseer/lib/utils";

export function ErrorMsg({
	children,
	className,
}: {
	children: React.ReactNode;
	className?: string;
}) {
	if (!children) return;
	return (
		<small className={cn("text-sm font-medium text-red-500", className)}>
			{children}
		</small>
	);
}
