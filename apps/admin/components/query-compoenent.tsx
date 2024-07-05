import { getErrorMessageSync } from "@ikseer/lib/get-error-msg";
import { Text } from "@mantine/core";
import type {
	UseInfiniteQueryResult,
	UseQueryResult,
} from "@tanstack/react-query";
import { useTranslations } from "next-intl";

export function QueryComponent<T>({
	query,
	render,
}: {
	query: UseQueryResult<T> | UseInfiniteQueryResult<T>;
	render: (data: T) => React.ReactNode;
}) {
	const t = useTranslations();

	if (query.isLoading) {
		return <div>Loading...</div>;
	}

	if (query.isError) {
		return (
			<div>
				<Text c="red">{getErrorMessageSync(query.error, t)}</Text>
			</div>
		);
	}

	if (!query.data) return;

	return render(query.data);
}
