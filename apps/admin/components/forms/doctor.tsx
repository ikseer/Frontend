import { doctorSchema as schema } from "@ikseer/api/services/accounts";
import {
	Button,
	Group,
	Modal,
	type ModalProps,
	Radio,
	Stack,
	TextInput,
	Textarea,
} from "@mantine/core";
import { useForm, zodResolver } from "@mantine/form";
import { useMutation } from "@tanstack/react-query";
import { useTranslations } from "next-intl";
import { useEffect } from "react";
import type { z } from "zod";

type FormData = z.infer<typeof schema>;

type DoctorFormProps = Omit<ModalProps, "onSubmit" | "children"> & {
	onSubmit: (data: FormData) => Promise<unknown>;
	initialValues?: FormData;
	onSuccess?: () => void;
};

export const emptyValues = {
	first_name: "",
	last_name: "",
	email: "",
	specialization: "",
	approved: true,
} satisfies FormData;

/** Use it for edit only */
export default function DoctorForm({
	onSuccess,
	initialValues,
	onSubmit,
	...props
}: DoctorFormProps) {
	const t = useTranslations("Forms");
	const form = useForm<FormData>({
		mode: "uncontrolled",
		validate: zodResolver(schema),
		initialValues: initialValues || emptyValues,
	});

	useEffect(() => {
		if (props.opened) {
			form.setValues(initialValues || emptyValues);
		}
	}, [props.opened, initialValues, form.setValues]);

	const save = useMutation({
		mutationFn: onSubmit,
		onSuccess,
	});

	useEffect(() => {
		if (save.isError) {
			const errors = save.error as unknown as Record<string, string[]>;
			for (const key in errors) {
				form.setFieldError(key, errors[key]);
			}
		}
	}, [save.isError, save.error, form.setFieldError]);

	return (
		<Modal {...props}>
			<form onSubmit={form.onSubmit((data) => save.mutateAsync(data))}>
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
					<Button mt="md" type="submit" loading={save.isPending}>
						{t("save")}
					</Button>
				</Stack>
			</form>
		</Modal>
	);
}
