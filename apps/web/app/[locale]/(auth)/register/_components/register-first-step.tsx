"use client";
import DividerText from "@/components/divider";
import AuthShape from "@/components/thrid-party-shape";
import { Link, useRouter } from "@/navigation";
import { FormProvider } from "react-hook-form";
import { LuKeyRound, LuMail, LuUser } from "react-icons/lu";
import "../register.css";
import { ErrorMsg } from "@/components/error-msg";
import Radio from "@/components/radio";
import Spinner from "@/components/spinner";
import { useZodForm } from "@/lib/use-zod-form";
import {
	useCheckEmail,
	useCheckUserName,
	useRegister,
} from "@ikseer/api/hooks/accounts";
import { Button } from "@ikseer/ui/components/ui/button";
import { FormInput } from "@ikseer/ui/components/ui/input";
import { useTranslations } from "next-intl";
import { useEffect } from "react";
import { z } from "zod";
import { useRegisterContext } from "../context/register-context";
import { useDebounce } from "./use-debounce";

const schema = z.object({
	username: z.string().min(1),
	email: z.string().email(),
	firstName: z.string().min(1),
	lastName: z.string(),
	password: z.string().min(8).max(20),
	gender: z.string(),
});

export function RegisterFirstStep() {
	const { triggerFunction } = useRegisterContext();

	const router = useRouter();
	const form = useZodForm({
		schema: schema,
	});

	const onSuccess = () => {
		router.push(`/register?email=${form.getValues().email}`);
		triggerFunction?.current?.click();
	};
	const { mutate, isPending } = useRegister({ onSuccess });

	const t = useTranslations("Register");
	const checkUserName = useCheckUserName();
	const checkEmail = useCheckEmail();
	// biome-ignore lint/correctness/useExhaustiveDependencies: <explanation>
	useEffect(() => {
		checkUserName.mutate(form.getValues().username);
	}, [useDebounce(form.getValues().username, 400)]);

	// biome-ignore lint/correctness/useExhaustiveDependencies: <explanation>
	useEffect(() => {
		checkEmail.mutate(form.getValues().email);
	}, [useDebounce(form.getValues().email, 400)]);

	const usernameisExist = checkUserName.data?.username_exists;
	const emailisExist = checkEmail.data?.email_exists;

	return (
		<FormProvider {...form}>
			<form
				className="flex flex-col items-center justify-center py-10 space-y-6 rounded-lg"
				autoComplete="off"
				onSubmit={form.handleSubmit((data) => {
					mutate(data);
				})}
				data-hs-stepper
				noValidate
			>
				<h1 className="pt-5 text-2xl font-bold">{t("welcome-to-ikseer")}</h1>
				<section className="space-y-4">
					<section className="grid grid-cols-2 gap-5">
						<div>
							<label htmlFor="firstName">{t("first-name")}</label>
							<FormInput
								placeholder={t("first-name")}
								name="firstName"
								className="h-10 rounded-md"
							/>
						</div>
						<div>
							<label htmlFor="lastName">{t("last-name")}</label>
							<FormInput
								placeholder={t("last-name")}
								name="lastName"
								className="h-10 rounded-md"
							/>
						</div>
					</section>
					<section className="flex w-full">
						<label
							htmlFor="email"
							className="flex items-center h-10 px-4 text-sm text-gray-500 border border-gray-200 cursor-pointer min-w-fit rounded-s-md border-e-0 bg-gray-50 dark:bg-gray-700 dark:border-gray-700 dark:text-gray-400"
						>
							<LuMail />
						</label>
						<FormInput
							name="email"
							placeholder={t("email")}
							className="h-10 rounded-e-md"
						/>
					</section>
					{emailisExist && (
						<ErrorMsg className="ms-12">Email already exists</ErrorMsg>
					)}
					<section className="flex w-full">
						<label
							htmlFor="username"
							className="flex items-center h-10 px-4 text-sm text-gray-500 border border-gray-200 cursor-pointer min-w-fit rounded-s-md border-e-0 bg-gray-50 dark:bg-gray-700 dark:border-gray-700 dark:text-gray-400"
						>
							<LuUser />
						</label>
						<FormInput name="username" placeholder={t("username")} />
					</section>
					{usernameisExist && (
						<ErrorMsg className="ms-12">Username already exists</ErrorMsg>
					)}
					<section className="flex w-full">
						<label
							htmlFor="password"
							className="flex items-center h-10 px-4 text-sm text-gray-500 border border-gray-200 cursor-pointer min-w-fit rounded-s-md border-e-0 bg-gray-50 dark:bg-gray-700 dark:border-gray-700 dark:text-gray-400"
						>
							<LuKeyRound />
						</label>
						<FormInput name="password" placeholder={t("password")} />
					</section>
					<section>
						<section className="flex gap-x-6">
							<div className="flex items-center gap-x-2">
								<Radio name="gender" value="male" />
								<label htmlFor="male">{t("male")}</label>
							</div>
							<div className="flex items-center gap-x-2">
								<Radio name="gender" value="female" />
								<label htmlFor="female">{t("female")}</label>
							</div>
							<div className="flex items-center gap-x-2">
								<Radio name="gender" value="prefernottosay" />
								<label htmlFor="prefernottosay">{t("prefer-not-to-say")}</label>
							</div>
						</section>
						{form.formState.errors.gender && (
							<p className="text-sm text-red-500">
								{form.formState.errors.gender.message}
							</p>
						)}
					</section>

					<Button
						type="submit"
						className="w-full bg-teal-600 rounded-md hover:bg-teal-700"
						disabled={isPending}
					>
						{isPending ? (
							<>
								{t("sign-up")} &nbsp; <Spinner />
							</>
						) : (
							t("sign-up")
						)}
					</Button>

					<section className="w-3/4">
						<span>{t("already-have-an-account")} </span>
						<Link href="/login" className="font-semibold text-teal-500">
							{t("login")}
						</Link>
					</section>
					<DividerText text={t("or")} />
					<AuthShape
						authImage="/auth/google.svg"
						text={t("continue-with-google")}
						className="w-3/4 m-auto"
					/>
					<AuthShape
						authImage="/auth/facebook.svg"
						text={t("continue-with-facebook")}
						className="w-3/4 m-auto"
					/>
				</section>
			</form>
		</FormProvider>
	);
}
