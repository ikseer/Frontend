import { couponSchema } from "@ikseer/api/services/products";
import {
	Button,
	Modal,
	NumberInput,
	Select,
	Stack,
	type ModalProps,
} from "@mantine/core";
import { DateInput } from "@mantine/dates";
import { useForm, zodResolver } from "@mantine/form";
import { useMutation } from "@tanstack/react-query";
import { useTranslations } from "next-intl";
import { useEffect } from "react";
import type { z } from "zod";

const TEN_DAYS_MS = 10 * 24 * 60 * 60 * 1000;

type CouponFormData = z.infer<typeof couponSchema>;

export const getEmptyValues = () =>
	({
		discount_type: "percentage",
		discount_amount: 0,
		usage_limit: 1000,
		start_date: new Date(),
		end_date: new Date(Date.now() + TEN_DAYS_MS),
	}) satisfies CouponFormData;

type CouponFormProps = Omit<ModalProps, "onSubmit"> & {
	onSubmit: (data: CouponFormData) => Promise<unknown>;
	initialValues?: CouponFormData;
	onSuccess?: () => void;
	formState: "update" | "create" | undefined;
};

export default function CouponForm({
	onSuccess,
	initialValues,
	onSubmit,
	formState,
	...props
}: CouponFormProps) {
	const t = useTranslations("Forms");
	const form = useForm<CouponFormData>({
		mode: "uncontrolled",
		validate: zodResolver(couponSchema),
		initialValues: initialValues || getEmptyValues(),
	});

	useEffect(() => {
		if (props.opened) {
			form.setValues(initialValues || getEmptyValues());
		}
	}, [props.opened, initialValues, form.setValues]);

	const saveCoupon = useMutation({
		mutationFn: onSubmit,
		onSuccess,
	});

	const updateCoupon = useMutation({
		mutationFn: onSubmit,
		onSuccess,
	});

	return (
		<Modal {...props}>
			<form
				onSubmit={form.onSubmit((data) => {
					if (formState === "create") saveCoupon.mutate(data);
					else updateCoupon.mutate(data);
				})}
			>
				<Stack>
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
					<Button mt="md" type="submit" loading={saveCoupon.isPending}>
						{t("save")}
					</Button>
				</Stack>
			</form>
		</Modal>
	);
}
