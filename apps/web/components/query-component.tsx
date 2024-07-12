import { getErrorMessageSync } from "@ikseer/lib/get-error-msg";
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
				<p className="text-red-600">{getErrorMessageSync(query.error, t)}</p>
			</div>
		);
	}

	if (!query.data) return;

	return render(query.data);
}
