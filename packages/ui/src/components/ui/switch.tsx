"use client";

import * as SwitchPrimitives from "@radix-ui/react-switch";
import * as React from "react";

import { cn } from "@/lib/utils";
import { type VariantProps, cva } from "class-variance-authority";

const thumbVariants = cva(
	"pointer-events-none relative block h-5 w-5 rounded-full shadow-lg ring-0 transition-all data-[state=checked]:start-5 data-[state=unchecked]:start-0",
	{
		variants: {
			variant: {
				default:
					"data-[state=checked]:bg-primary data-[state=unchecked]:bg-background",
				accent:
					"data-[state=checked]:bg-accent data-[state=unchecked]:bg-background",
			},
		},
		defaultVariants: {
			variant: "default",
		},
	},
);

export interface SwitchProps
	extends React.ComponentPropsWithoutRef<typeof SwitchPrimitives.Root>,
		VariantProps<typeof thumbVariants> {
	thumbClassName?: string;
}

const Switch = React.forwardRef<
	React.ElementRef<typeof SwitchPrimitives.Root>,
	SwitchProps
>(({ className, thumbClassName, variant, ...props }, ref) => (
	<SwitchPrimitives.Root
		className="inline-flex items-center border-2 bg-input disabled:opacity-50 border-transparent rounded-full w-11 h-6 transition-colors cursor-pointer peer shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:cursor-not-allowed"
		{...props}
		ref={ref}
	>
		<SwitchPrimitives.Thumb
			className={cn(
				thumbVariants({
					variant,
					className: thumbClassName,
				}),
			)}
		/>
	</SwitchPrimitives.Root>
));
Switch.displayName = SwitchPrimitives.Root.displayName;

export { Switch };
