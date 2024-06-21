import { cn } from "@/lib/utils";

export function ErrorMsg({
	children,
	className,
}: { children: React.ReactNode; className?: string }) {
	return (
		<small className={cn("text-red-500 text-[14px]", className)}>
			{children}{" "}
		</small>
	);
}
