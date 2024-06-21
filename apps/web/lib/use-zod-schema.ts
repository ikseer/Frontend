// source: https://github.com/juliusmarminge/acme-corp/blob/90a28878e07f15517fdb0892a5c7ecb364364b14/apps/nextjs/src/lib/zod-form.tsx
import { zodResolver } from "@hookform/resolvers/zod";
import type { UseFormProps } from "react-hook-form";
import { useForm } from "react-hook-form";
import type { ZodType } from "zod";
import { useI18nZodErrors } from "./use-I18n-zod-errors";

export function useZodForm<TSchema extends ZodType>(
	props: Omit<UseFormProps<TSchema["_output"]>, "resolver"> & {
		schema: TSchema;
	},
) {
	useI18nZodErrors();
	const form = useForm<TSchema["_output"]>({
		...props,
		resolver: zodResolver(props.schema, undefined),
	});

	return form;
}
