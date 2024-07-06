import { categoriesHooks } from "@ikseer/api/hooks/products";
import { productDetailsSchema as schema } from "@ikseer/api/services/products";
import {
	Button,
	Modal,
	type ModalProps,
	NumberInput,
	Select,
	Stack,
	Textarea,
	TextInput,
} from "@mantine/core";
import { useForm, zodResolver } from "@mantine/form";
import { useMutation } from "@tanstack/react-query";
import { useTranslations } from "next-intl";
import { useEffect } from "react";
import type { z } from "zod";

type FormData = z.infer<typeof schema>;

type ProductDetailsFormProps = Omit<ModalProps, "onSubmit" | "children"> & {
	onSubmit: (data: FormData) => Promise<unknown>;
	initialValues?: FormData;
	onSuccess?: () => void;
};

export const getEmptyValues = () =>
	({
		name: "",
		generic_name: "",
		short_description: "",
		description: "",
		strength: "",
		price: 0,
		stock: 0,
		pharmacy: null,
		category: null,
		form: null,
		factory_company: "",
		code: "",
	}) satisfies {
		[key in keyof FormData]: FormData[key] | null;
	};

export default function ProductDetailsForm({
	onSuccess,
	initialValues,
	onSubmit,
	...props
}: ProductDetailsFormProps) {
	const t = useTranslations("Forms");

	const form = useForm<FormData>({
		mode: "uncontrolled",
		validate: zodResolver(schema),
		initialValues: initialValues || (getEmptyValues() as unknown as FormData),
	});

	useEffect(() => {
		if (props.opened) {
			form.setValues(
				initialValues || (getEmptyValues() as unknown as FormData),
			);
		}
	}, [props.opened, initialValues, form.setValues]);

	const submit = useMutation({
		mutationFn: onSubmit,
		onSuccess,
	});

	useEffect(() => {
		if (submit.isError) {
			const errors = submit.error as unknown as Record<string, string[]>;
			for (const key in errors) {
				form.setFieldError(key, errors[key]);
			}
		}
	}, [submit.isError, submit.error, form.setFieldError]);

	const categories = categoriesHooks.useList({
		pagination: {
			pageSize: 1e6,
		},
	});

	return (
		<Modal {...props}>
			<form onSubmit={form.onSubmit((data) => submit.mutateAsync(data))}>
				<Stack>
					<TextInput
						withAsterisk
						label={"Name"}
						{...form.getInputProps("name")}
					/>
					<TextInput
						withAsterisk
						label={"Generic name"}
						{...form.getInputProps("generic_name")}
					/>
					<TextInput
						withAsterisk
						label={"Product code"}
						{...form.getInputProps("code")}
					/>
					<TextInput
						withAsterisk
						label={"Factory company"}
						{...form.getInputProps("factory_company")}
					/>
					<Textarea
						withAsterisk
						label={"Short description"}
						{...form.getInputProps("short_description")}
					/>
					<Textarea
						withAsterisk
						label={"Description"}
						{...form.getInputProps("description")}
					/>
					<NumberInput
						withAsterisk
						label={"Price"}
						{...form.getInputProps("price")}
					/>
					<NumberInput
						withAsterisk
						label={"Count in stock"}
						{...form.getInputProps("stock")}
					/>
					<Select
						withAsterisk
						label={"Shape"}
						data={[
							{ value: "tablet", label: "Tablet" },
							{ value: "capsule", label: "Capsule" },
							{ value: "liquid", label: "Liquid" },
							{ value: "N/A", label: "N/A" },
						]}
						{...form.getInputProps("form")}
					/>
					<Select
						withAsterisk
						label={"Category"}
						data={categories.data?.results.map((category) => ({
							value: category.id,
							label: category.name,
						}))}
						{...form.getInputProps("category")}
					/>
					<Button mt="md" type="submit" loading={submit.isPending}>
						{t("save")}
					</Button>
				</Stack>
			</form>
		</Modal>
	);
}
