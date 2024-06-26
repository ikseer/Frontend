import { cn } from "@ikseer/lib/utils";
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
					{label && <Form.FormLabel>{label}</Form.FormLabel>}
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

export { FormInput };
