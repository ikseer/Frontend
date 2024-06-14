import {
	Select,
	SelectContent,
	SelectGroup,
	SelectItem,
	SelectLabel,
	SelectTrigger,
	SelectValue,
} from "@ikseer/ui/src/components/ui/select";

export function SelectBuilder(
	data: { value: string; label: string }[],
	title: string,
	placeholder?: string,
) {
	return (
		<Select>
			<SelectTrigger className="w-[180px]">
				<SelectValue placeholder={`${placeholder} ?? choose from dropdown`} />
			</SelectTrigger>
			<SelectContent>
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
