import { isAxiosError } from "axios";
import { getTranslations } from "next-intl/server";

export async function getErrorMessage(e: unknown): Promise<string> {
	const t = await getTranslations();
	return getErrorMessageSync(e, t);
}

export function getErrorMessageSync(
	e: unknown,
	// biome-ignore lint/suspicious/noExplicitAny:
	t: (key: any) => string,
): string {
	let msg = t("Common.errors.something-went-wrong");
	if (isAxiosError(e)) msg = e.response?.data?.non_field_errors || msg;
	if (typeof e === "string") return e;
	return msg;
}
