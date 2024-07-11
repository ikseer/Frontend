import { cn } from "@ikseer/lib/utils";

export default function Spinner({ className }: { className?: string }) {
	return (
		<div
			className={cn(
				"animate-spin inline-block size-6 border-[3px] border-current border-t-transparent text-blue-300 rounded-full",
				className,
			)}
			role="status"
			aria-label="loading"
		>
			<span className="sr-only">Loading...</span>
		</div>
	);
}
