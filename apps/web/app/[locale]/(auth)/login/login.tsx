"use client";
import DividerText from "@/components/divider";
import AuthShape from "@/components/thrid-party-shape";
import { Link } from "@/navigation";
import { FormProvider } from "react-hook-form";
import { LuMail } from "react-icons/lu";
import { LuKeyRound } from "react-icons/lu";
import "../register/register.css";
import { useLogin } from "@ikseer/api/hooks/accounts";
import { ErrorMsg } from "@/components/error-msg";
import Spinner from "@/components/spinner";
import { getErrorMsg } from "@/lib/get-error-msg";
import { useZodForm } from "@/lib/use-zod-schema";
import { Button } from "@ikseer/ui/src/components/ui/button";
import { FormInput } from "@ikseer/ui/src/components/ui/input";
import { useTranslations } from "next-intl";
import { z } from "zod";

const schema = z.object({
	username: z.string(),
	password: z.string(),
});

export default function Login() {
	const form = useZodForm({
		schema: schema,
	});

	const { mutate, isPending, data, error } = useLogin({});
	const errorMsg = getErrorMsg(error);
	console.info(errorMsg.non_field_errors?.[0]);
	const t = useTranslations("Login");

	return (
		<FormProvider {...form}>
			<form
				className="flex items-center justify-center auth-parent hero"
				autoComplete="off"
				onSubmit={form.handleSubmit((LoginData) => mutate(LoginData))}
				noValidate
			>
				<section
					style={{ width: "550px" }}
					className="flex flex-col items-center justify-center h-full rounded-lg bg-zinc-100 dark:bg-zinc-950"
				>
					<h1 className="mt-4 text-2xl font-bold ">{t("welcome-to-ikseer")}</h1>
					<ErrorMsg>{errorMsg.non_field_errors?.[0]} </ErrorMsg>
					<div className="w-3/4 mt-5 space-y-4">
						<section className="flex w-full">
							<label
								htmlFor="username"
								className="flex items-center h-10 px-4 text-sm text-gray-500 border border-gray-200 cursor-pointer min-w-fit rounded-s-md border-e-0 bg-gray-50 dark:bg-gray-700 dark:border-gray-700 dark:text-gray-400"
							>
								<LuMail />
							</label>

							<FormInput
								name="username"
								placeholder={t("email-or-username")}
								type="text"
								className="h-10 rounded-e-md"
							/>
						</section>
						<section className="flex w-full">
							<label
								htmlFor="password"
								className="flex items-center h-10 px-4 text-sm text-gray-500 border border-gray-200 cursor-pointer min-w-fit rounded-s-md border-e-0 bg-gray-50 dark:bg-gray-700 dark:border-gray-700 dark:text-gray-400"
							>
								<LuKeyRound />
							</label>
							<FormInput
								name="password"
								placeholder={t("password")}
								type="password"
								className="h-10 rounded-e-md"
							/>
						</section>
					</div>

					<Button
						variant="submit"
						className="w-3/4 h-[42px] my-5"
						disabled={isPending}
					>
						{isPending ? <Spinner /> : "Login"}
					</Button>

					<div className="w-3/4">
						<section className="flex gap-x-1">
							<span>{t("forgot-your-password")}</span>
							<Link
								href="/otp-by-email"
								style={{ color: "#0B9992", fontWeight: "600" }}
							>
								Change password!
							</Link>
						</section>
						<section className="flex gap-x-1">
							<span>{t("dont-have-an-account")}</span>
							<Link
								href="/register"
								style={{ color: "#0B9992", fontWeight: "600" }}
							>
								{t("register-now")}
							</Link>
						</section>
					</div>
					<DividerText text={t("or")} />
					<AuthShape
						authImage="/auth/google.svg"
						text={t("continue-with-google")}
						className="w-3/4"
					/>
					<AuthShape
						authImage="/auth/facebook.svg"
						text={t("continue-with-facebook")}
						className="w-3/4"
					/>
				</section>
			</form>
		</FormProvider>
	);
}
