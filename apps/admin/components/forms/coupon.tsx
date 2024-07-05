import "@mantine/dates/styles.css";

import { couponSchema as schema } from "@ikseer/api/services/products";
import {
	Button,
	Checkbox,
	Modal,
	NumberInput,
	Select,
	Stack,
	TextInput,
	type ModalProps,
} from "@mantine/core";
import { DateInput } from "@mantine/dates";
import { useForm, zodResolver } from "@mantine/form";
import { useMutation } from "@tanstack/react-query";
import { useTranslations } from "next-intl";
import { useEffect } from "react";
import type { z } from "zod";

const TEN_DAYS_MS = 10 * 24 * 60 * 60 * 1000;

type CouponFormData = z.infer<typeof schema>;

const getRandomCoupon = () => {
	return Math.random().toString(36).slice(2);
};

export const getEmptyValues = () =>
	({
		discount_type: "percentage",
		discount_amount: 0,
		usage_limit: 1000,
		start_date: new Date(),
		end_date: new Date(Date.now() + TEN_DAYS_MS),
		minimum_purchase_amount: 0,
		code: getRandomCoupon(),
		active: true,
	}) satisfies CouponFormData;

type CouponFormProps = Omit<ModalProps, "onSubmit"> & {
	onSubmit: (data: CouponFormData) => Promise<unknown>;
	initialValues?: CouponFormData;
	onSuccess?: () => void;
};

export default function CouponForm({
	onSuccess,
	initialValues,
	onSubmit,
	...props
}: CouponFormProps) {
	const t = useTranslations("Forms");
	const form = useForm<CouponFormData>({
		mode: "uncontrolled",
		validate: zodResolver(schema),
		initialValues: initialValues || getEmptyValues(),
	});

	useEffect(() => {
		if (props.opened) {
			form.setValues(initialValues || getEmptyValues());
		}
	}, [props.opened, initialValues, form.setValues]);

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
					<TextInput
						withAsterisk
						label="Code"
						{...form.getInputProps("code")}
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
					<NumberInput
						withAsterisk
						label="Usage limit"
						{...form.getInputProps("usage_limit")}
					/>
					<NumberInput
						withAsterisk
						label="Minimum purchase amount"
						{...form.getInputProps("minimum_purchase_amount")}
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
					<Button mt="md" type="submit" loading={save.isPending}>
						{t("save")}
					</Button>
				</Stack>
			</form>
		</Modal>
	);
}
