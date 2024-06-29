import { doctorSchema } from "@ikseer/api/services/accounts";
import {
	Button,
	Group,
	Modal,
	type ModalProps,
	Radio,
	Stack,
	Textarea,
	TextInput,
} from "@mantine/core";
import { useForm, zodResolver } from "@mantine/form";
import { useMutation } from "@tanstack/react-query";
import { useTranslations } from "next-intl";
import { useEffect } from "react";
import type { z } from "zod";
import type { clientAPI } from "@ikseer/api/config/api.client";

type DoctorFormProps = Omit<ModalProps, "onSubmit" | "children"> & {
	onSubmit: (typeof clientAPI)["accounts"]["createDoctor"];
	initialValues?: z.infer<typeof doctorSchema>;
	onSuccess?: () => void;
};

export const emptyValues = {
	first_name: "",
	last_name: "",
	specialization: "",
};

export default function DoctorForm({
	onSuccess,
	initialValues,
	onSubmit,
	...props
}: DoctorFormProps) {
	const t = useTranslations("Forms");
	const form = useForm<z.infer<typeof doctorSchema>>({
		mode: "uncontrolled",
		validate: zodResolver(doctorSchema),
		initialValues: initialValues || emptyValues,
	});

	useEffect(() => {
		if (props.opened) {
			form.setValues(initialValues || emptyValues);
		}
	}, [props.opened, initialValues, form.setValues]);

	const saveDoctor = useMutation({
		mutationFn: onSubmit,
		onSuccess,
	});

	useEffect(() => {
		if (saveDoctor.isError) {
			const errors = saveDoctor.error as unknown as Record<string, string[]>;
			for (const key in errors) {
				form.setFieldError(key, errors[key]);
			}
		}
	}, [saveDoctor.isError, saveDoctor.error, form.setFieldError]);

	return (
		<Modal {...props}>
			<form
				onSubmit={form.onSubmit(({ ...data }) => {
					const newData = {
						...data,
						date_of_birth: data?.date_of_birth?.toISOString().slice(0, 10),
					};
					// @ts-ignore
					saveDoctor.mutate(newData);
				})}
			>
				<Stack>
					<TextInput
						withAsterisk
						label={t("first-name")}
						{...form.getInputProps("first_name")}
					/>
					<TextInput
						withAsterisk
						label={t("last-name")}
						{...form.getInputProps("last_name")}
					/>
					<TextInput
						label={t("specialization")}
						{...form.getInputProps("specialization")}
					/>
					<TextInput
						label={t("email")}
						type="email"
						{...form.getInputProps("email")}
					/>
					<Radio.Group label={t("gender")} {...form.getInputProps("gender")}>
						<Group>
							<Radio value="male" label={t("male")} />
							<Radio value="female" label={t("female")} />
						</Group>
					</Radio.Group>
					<Textarea label={t("bio")} {...form.getInputProps("bio")} />
					<Button mt="md" type="submit" loading={saveDoctor.isPending}>
						{t("save")}
					</Button>
				</Stack>
			</form>
		</Modal>
	);
}
