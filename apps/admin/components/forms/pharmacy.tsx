import { pharmacySchema as schema } from "@ikseer/api/services/pharmacies";
import {
	Button,
	Modal,
	type ModalProps,
	NumberInput,
	Stack,
	TextInput,
} from "@mantine/core";
import { TimeInput } from "@mantine/dates";
import { useForm, zodResolver } from "@mantine/form";
import { useMutation } from "@tanstack/react-query";
import { useTranslations } from "next-intl";
import { useEffect } from "react";
import type { z } from "zod";

type FormData = z.infer<typeof schema>;

type PharmacyFormProps = Omit<ModalProps, "onSubmit" | "children"> & {
	onSubmit: (data: FormData) => Promise<unknown>;
	initialValues?: FormData;
	onSuccess?: () => void;
};

export const getEmptyValues = () =>
	({
		name: "",
		location: "",
		phone: "",
	}) satisfies FormData;

export default function PharmacyForm({
	onSuccess,
	initialValues,
	onSubmit,
	...props
}: PharmacyFormProps) {
	const t = useTranslations("Forms");
	const form = useForm<FormData>({
		mode: "uncontrolled",
		validate: zodResolver(schema),
		initialValues: initialValues || getEmptyValues(),
	});

	useEffect(() => {
		if (props.opened) {
			form.setValues(initialValues || getEmptyValues());
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

	return (
		<Modal {...props}>
			<form onSubmit={form.onSubmit((data) => submit.mutateAsync(data))}>
				<Stack>
					<TextInput
						withAsterisk
						label={t("name")}
						autoComplete="off"
						{...form.getInputProps("name")}
					/>
					<TextInput
						withAsterisk
						label={t("phone")}
						autoComplete="off"
						{...form.getInputProps("phone")}
					/>
					<TextInput
						label={t("location")}
						autoComplete="off"
						{...form.getInputProps("location")}
					/>
					<TimeInput
						label={t("open-time")}
						{...form.getInputProps("open_time")}
					/>
					<TimeInput
						label={t("close-time")}
						{...form.getInputProps("close_time")}
					/>
					<NumberInput
						label={t("latitude")}
						autoComplete="off"
						{...form.getInputProps("latitude")}
					/>
					<NumberInput
						label={t("longitude")}
						autoComplete="off"
						{...form.getInputProps("latitude")}
					/>
					<Button mt="md" type="submit" loading={submit.isPending}>
						{t("save")}
					</Button>
				</Stack>
			</form>
		</Modal>
	);
}
