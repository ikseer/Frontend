import { Skeleton } from "@ikseer/ui/components/ui/skeleton";

export function SkeletonCard() {
	return (
		<div className="flex flex-col space-y-3">
			<Skeleton className="h-[125px]  rounded-xl" />
			<div className="space-y-2">
				<Skeleton className="h-6" />
				<Skeleton className="h-6" />
			</div>
		</div>
	);
}
