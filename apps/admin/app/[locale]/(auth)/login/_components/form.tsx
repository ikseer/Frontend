"use client";

import { AFTER_LOGIN_REDIRECT } from "@/lib/routes";
import { useRouter } from "@/navigation";
import { setSession } from "@ikseer/api/utils/session.client";
import { useLogin } from "@ikseer/api/hooks/accounts";
import { getErrorMessageSync } from "@ikseer/lib/get-error-msg";
import { Button, TextInput } from "@mantine/core";
import { useForm } from "@mantine/form";
import { zodResolver } from "mantine-form-zod-resolver";
import { useTranslations } from "next-intl";
import * as z from "zod";

export interface LoginData {
	username: string;
	password: string;
}

export default function LoginForm() {
	const $t = useTranslations();
	const t = useTranslations("Login");
	const router = useRouter();
	const loginSchema = z.object({
		username: z.string(),
		password: z.string(),
	});
	const form = useForm<z.infer<typeof loginSchema>>({
		mode: "uncontrolled",
		validate: zodResolver(loginSchema),
	});
	const { mutate, error, isError, isPending, isSuccess } = useLogin({
		onSuccess(data) {
			setSession({
				accessToken: data.access,
				refreshToken: data.refresh,
				userId: data.user.id,
				userType: data.user.is_staff ? "admin" : data.user.user_type,
				profileId: data.profile_id,
			});
			router.push(AFTER_LOGIN_REDIRECT);
		},
	});
	return (
		<form
			className="space-y-7"
			onSubmit={form.onSubmit((loginInfo) => {
				mutate(loginInfo);
			})}
		>
			{isError && (
				<p className="text-red-600 text-center text-sm">
					{getErrorMessageSync(error, $t)}
				</p>
			)}
			<div className="space-y-3">
				<TextInput
					label={t("username")}
					placeholder={t("username-placeholder")}
					{...form.getInputProps("username")}
				/>
				<TextInput
					label={t("password")}
					type="password"
					placeholder="**********"
					{...form.getInputProps("password")}
				/>
			</div>
			<Button type="submit" className="w-full" loading={isPending || isSuccess}>
				{t("login")}
			</Button>
		</form>
	);
}
