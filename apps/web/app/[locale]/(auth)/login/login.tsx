"use client";
import DividerText from "@/components/divider";
import Facebook from "@/images/auth/Facebook.svg";
import Google from "@/images/auth/Google.svg";
import { Link } from "@/navigation";
import { FormProvider } from "react-hook-form";
import { LuMail } from "react-icons/lu";
import { LuKeyRound } from "react-icons/lu";
// import AuthShape from '@/components/site/ThridParthAuth/ThridPartyAuth';
import { useLogin } from "../hooks/useLogin";
import "../register/register.css";
import Spinner from "@/components/spinner";
import { useZodForm } from "@/lib/uer-zod-schema";
import { Button } from "@ikseer/ui/src/ui/button";
import { FormInput } from "@ikseer/ui/src/ui/input";
import { useTranslations } from "next-intl";
import { z } from "zod";

const schema = z.object({
	username: z.string().min(1),
	password: z.string().min(8),
});

export default function Login() {
	const form = useZodForm({
		schema: schema,
	});
	const { mutate, isPending } = useLogin();
	const t = useTranslations("Login");

	return (
		<FormProvider {...form}>
			<form
				className="auth-parent hero flex items-center justify-center"
				autoComplete="off"
				onSubmit={form.handleSubmit((LoginData) => mutate(LoginData))}
				noValidate
			>
				<section
					style={{ width: "550px" }}
					className="bg-zinc-100 dark:bg-zinc-950 flex flex-col items-center justify-center h-full rounded-lg"
				>
					<h1 className=" mt-4 text-2xl font-bold">{t("welcome-to-ikseer")}</h1>
					<div className="w-3/4 mt-5 space-y-4">
						<section className="flex w-full">
							<label
								htmlFor="username"
								className="min-w-fit rounded-s-md border-e-0 bg-gray-50 dark:bg-gray-700 dark:border-gray-700 dark:text-gray-400 flex items-center h-10 px-4 text-sm text-gray-500 border border-gray-200 cursor-pointer"
							>
								<LuMail />
							</label>

							<FormInput
								name="username"
								placeholder={t("email-or-username")}
								type="text"
								className="rounded-e-md h-10"
							/>
						</section>
						<section className="flex w-full">
							<label
								htmlFor="password"
								className="min-w-fit rounded-s-md border-e-0 bg-gray-50 dark:bg-gray-700 dark:border-gray-700 dark:text-gray-400 flex items-center h-10 px-4 text-sm text-gray-500 border border-gray-200 cursor-pointer"
							>
								<LuKeyRound />
							</label>
							<FormInput
								name="password"
								placeholder={t("password")}
								type="password"
								className="rounded-e-md h-10"
							/>
						</section>
					</div>

					<Button
						className="bg-teal-600 hover:bg-teal-700 w-3/4 h-[42px] my-5"
						disabled={isPending}
					>
						{isPending ? <Spinner /> : "Login"}
					</Button>

					<div className="w-3/4">
						<Link href="/reset-password">{t("forgot-your-password")}</Link>
						<section>
							<span>{t("dont-have-an-account")}</span>
							<Link
								href="/register"
								style={{ color: "#0B9992", fontWeight: "600" }}
							>
								{t("register-now")}
							</Link>
						</section>
					</div>
					<DividerText text="or" />
					{/* <AuthShape authImage={Google} text={t('continue-with-google')} width="76%" />
          <AuthShape authImage={Facebook} text={t('continue-with-facebook')} width="76%" /> */}
				</section>
			</form>
		</FormProvider>
	);
}