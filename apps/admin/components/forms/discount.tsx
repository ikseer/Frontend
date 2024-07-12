import "@mantine/dates/styles.css";

import { discountSchema as schema } from "@ikseer/api/services/products";
import {
	Button,
	Checkbox,
	Modal,
	type ModalProps,
	NumberInput,
	Select,
	Stack,
} from "@mantine/core";
import { DateInput } from "@mantine/dates";
import { useForm, zodResolver } from "@mantine/form";
import { useMutation } from "@tanstack/react-query";
import { useTranslations } from "next-intl";
import { useEffect } from "react";
import type { z } from "zod";

const TEN_DAYS_MS = 10 * 24 * 60 * 60 * 1000;

type FormData = z.infer<typeof schema>;

export const getEmptyValues = (product: string) =>
	({
		discount_type: "percentage",
		discount_amount: 0,
		start_date: new Date(),
		end_date: new Date(Date.now() + TEN_DAYS_MS),
		active: true,
		product,
	}) satisfies FormData;

type FormProps = Omit<ModalProps, "onSubmit"> & {
	onSubmit: (data: FormData) => Promise<unknown>;
	initialValues?: FormData;
	onSuccess?: () => void;
	product: string;
};

export default function DiscountForm({
	onSuccess,
	initialValues,
	onSubmit,
	product,
	...props
}: FormProps) {
	const t = useTranslations("Forms");
	const form = useForm<FormData>({
		mode: "uncontrolled",
		validate: zodResolver(schema),
		initialValues: initialValues || getEmptyValues(product),
	});

	useEffect(() => {
		if (props.opened) {
			form.setValues(initialValues || getEmptyValues(product));
		}
	}, [props.opened, initialValues, form.setValues, product]);

	const save = useMutation({
		mutationFn: onSubmit,
		onSuccess,
	});

	return (
		<Modal {...props}>
			<form
				onSubmit={form.onSubmit((data) => {
					save.mutate(data);
				})}
			>
				<Stack>
					<Checkbox
						defaultChecked={form.getValues().active}
						label="Is active?"
						{...form.getInputProps("active")}
					/>
					<Select
						label="Discount type"
						placeholder="choose type"
						{...form.getInputProps("discount_type")}
						data={["percentage", "amount"]}
					/>
					<NumberInput
						withAsterisk
						label="Discount amount"
						{...form.getInputProps("discount_amount")}
					/>
					<DateInput
						withAsterisk
						label="Start date"
						{...form.getInputProps("start_date")}
					/>
					<DateInput
						withAsterisk
						label="End date"
						{...form.getInputProps("end_date")}
					/>
					<input
						{...form.getInputProps("product")}
						type="hidden"
						defaultValue={product}
					/>
					<Button mt="md" type="submit" loading={save.isPending}>
						{t("save")}
					</Button>
				</Stack>
			</form>
		</Modal>
	);
}
