import { cn } from "@ikseer/lib/utils";
import { Loader2 } from "lucide-react";

export interface ISVGProps extends React.SVGProps<SVGSVGElement> {
	size?: number;
	className?: string;
}

export const LoadingSpinner = ({
	className,
	strokeWidth,
	...props
}: ISVGProps) => {
	if (props.size && props.size >= 70 && typeof strokeWidth === "undefined") {
		strokeWidth = 1;
	}
	return (
		<Loader2
			{...props}
			strokeWidth={strokeWidth}
			className={cn("text-primary animate-spin", className)}
		/>
	);
};

export function FullScreenLoadingSpinner() {
	return (
		<div className="grid w-screen h-screen place-items-center">
			<LoadingSpinner size={100} />
		</div>
	);
}
export function FullScreenSpinnerWithNavBar() {
	return (
		<div className="grid w-screen h-[100vh-60px] place-items-center">
			<LoadingSpinner size={100} />
		</div>
	);
}
