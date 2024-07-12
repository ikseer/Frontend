import { userSchema as schema } from "@ikseer/api/services/accounts";
import {
	Button,
	Checkbox,
	Modal,
	type ModalProps,
	Select,
	Stack,
	TextInput,
} from "@mantine/core";
import { useForm, zodResolver } from "@mantine/form";
import { useMutation } from "@tanstack/react-query";
import { useTranslations } from "next-intl";
import { useEffect } from "react";
import type { z } from "zod";

type FormData = z.infer<typeof schema>;

type UserFormProps = Omit<ModalProps, "onSubmit" | "children"> & {
	onSubmit: (data: FormData) => Promise<unknown>;
	initialValues?: FormData;
	onSuccess?: () => void;
};

export const getEmptyValues = () =>
	({
		first_name: "",
		last_name: "",
		email: "",
		is_staff: false,
		user_type: "employee",
		username: "",
	}) satisfies FormData;

export default function UserForm({
	onSuccess,
	initialValues,
	onSubmit,
	...props
}: UserFormProps) {
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
						label={"First name"}
						autoComplete="off"
						{...form.getInputProps("first_name")}
					/>
					<TextInput
						withAsterisk
						label={"Last name"}
						autoComplete="off"
						{...form.getInputProps("last_name")}
					/>
					<TextInput
						label={t("username")}
						type="username"
						autoComplete="off"
						{...form.getInputProps("username")}
					/>
					<TextInput
						label={t("email")}
						type="email"
						autoComplete="off"
						{...form.getInputProps("email")}
					/>
					<Select
						withAsterisk
						label={"User type"}
						{...form.getInputProps("user_type")}
						data={["admin", "doctor", "employee"]}
					/>
					<Checkbox
						defaultChecked={form.getValues().is_staff}
						label={"Is staff?"}
						{...form.getInputProps("is_staff")}
					/>
					<Button mt="md" type="submit" loading={submit.isPending}>
						{t("save")}
					</Button>
				</Stack>
			</form>
		</Modal>
	);
}
