"use client";
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "@ikseer/ui/components/ui/select";
import { useTheme } from "next-themes";

export function SwitchTheme() {
	const { setTheme, theme } = useTheme();

	return (
		<Select onValueChange={(value) => setTheme(value)}>
			<SelectTrigger>
				<SelectValue placeholder={theme === "dark" ? "Dark" : "Light"} />
			</SelectTrigger>
			<SelectContent align="end">
				<SelectItem value="light">Light</SelectItem>
				<SelectItem value="dark">Dark</SelectItem>
				<SelectItem value="system">System</SelectItem>
			</SelectContent>
		</Select>
	);
}
