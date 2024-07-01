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

export function SelectBuilder({
	data,
	title,
	placeholder,
	contentClassName,
}: {
	data: { value: string; label: string }[];
	title: string;
	placeholder?: string;
	contentClassName?: string;
}) {
	return (
		<Select>
			<SelectTrigger>
				<SelectValue placeholder={`${placeholder ?? "choose from dropdown"}`} />
			</SelectTrigger>
			<SelectContent className={cn("h-64", contentClassName)}>
				<SelectGroup>
					<SelectLabel>{title}</SelectLabel>
					{data.map((item) => {
						return (
							<SelectItem key={item.value} value={item.value}>
								{item.label}
							</SelectItem>
						);
					})}
				</SelectGroup>
			</SelectContent>
		</Select>
	);
}
