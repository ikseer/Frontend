import { cn } from "@ikseer/lib/utils";
import {
	Select,
	SelectContent,
	SelectGroup,
	SelectItem,
	SelectLabel,
	SelectTrigger,
	SelectValue,
} from "@ikseer/ui/components/ui/select";
import { Controller, useFormContext } from "react-hook-form";

export function SelectBuilder({
	data,
	title,
	placeholder,
	contentClassName,
	name,
}: {
	data: { value: string; label: string }[];
	title: string;
	placeholder?: string;
	contentClassName?: string;
	name: string;
}) {
	const { control } = useFormContext();
	// add error msg
	return (
		<Controller
			name={name}
			control={control}
			render={({ field }) => (
				<Select value={field.value} onValueChange={field.onChange}>
					<SelectTrigger>
						<SelectValue placeholder={placeholder ?? "Choose from dropdown"} />
					</SelectTrigger>
					<SelectContent className={cn("h-64", contentClassName)}>
						<SelectGroup>
							<SelectLabel>{title}</SelectLabel>
							{data.map((item) => (
								<SelectItem key={item.value} value={item.value}>
									{item.label}
								</SelectItem>
							))}
						</SelectGroup>
					</SelectContent>
				</Select>
			)}
		/>
	);
}
