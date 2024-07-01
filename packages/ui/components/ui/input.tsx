import { cn } from "@ikseer/lib/utils";
import React from "react";
import { useFormContext } from "react-hook-form";
import * as Form from "./form";

export interface InputProps
	extends React.InputHTMLAttributes<HTMLInputElement> {
	name: string;
	description?: string;
	label?: string;
}

const FormInput = ({
	className,
	name,
	type,
	label,
	description,
	defaultValue,
	disabled,
	...props
}: InputProps) => {
	const form = useFormContext();
	return (
		<Form.FormField
			name={name}
			control={form.control}
			defaultValue={defaultValue}
			disabled={disabled}
			render={({ field }) => (
				<Form.FormItem>
					{label && <Form.FormLabel htmlFor={name}>{label}</Form.FormLabel>}
					<Form.FormControl>
						<input
							type={type}
							className={cn(
								"py-2 px-3 pe-11 block w-full",
								"border-gray-200 shadow-sm text-sm focus:z-10 focus:border-gray-300 focus:ring-gray-300",
								"disabled:opacity-50 disabled:pointer-events-none",
								"dark:bg-zinc-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600",
								className,
							)}
							{...props}
							{...field}
							id={name}
						/>
					</Form.FormControl>
					{description && (
						<Form.FormDescription>{description}</Form.FormDescription>
					)}
					<Form.FormMessage />
				</Form.FormItem>
			)}
		/>
	);
};

// Input
export interface InputProps
	extends React.InputHTMLAttributes<HTMLInputElement> {}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
	({ className, type, ...props }, ref) => {
		return (
			<input
				type={type}
				className={cn(
					"flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
					className,
				)}
				ref={ref}
				{...props}
			/>
		);
	},
);
Input.displayName = "Input";

export { FormInput, Input };
