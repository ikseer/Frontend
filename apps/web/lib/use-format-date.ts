import { useFormatter } from "next-intl";

export function getDateFromString(date: string | null | undefined) {
	if (!date) return null;
	const format = useFormatter();
	const dateTime = new Date(date);
	return format.dateTime(dateTime, {
		year: "numeric",
		month: "short",
		day: "numeric",
	});
}
