"use client";
import DividerText from "@/components/site/divider";
import AuthShape from "@/components/site/thrid-party-shape";
import Facebook from "@/images/auth/Facebook.svg";
import Google from "@/images/auth/Google.svg";
import { Link } from "@/navigation";
import { FormProvider } from "react-hook-form";
import { LuKeyRound, LuMail, LuUser } from "react-icons/lu";
import "../register.css";
import { useCheckEmail, useCheckUserName, useRegister } from "@/api/hooks/auth";
import Radio from "@/components/site/radio";
import Spinner from "@/components/site/spinner";
import { useZodForm } from "@/lib/use-zod-schema";
import { Button } from "@ikseer/ui/src/components/ui/button";
import { FormInput } from "@ikseer/ui/src/components/ui/input";
import { useTranslations } from "next-intl";
import { useEffect } from "react";
import { z } from "zod";
import { useRegisterContext } from "../context/RegisterContext";
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
	const form = useZodForm({
		schema: schema,
	});

	const onSuccess = () => {
		triggerFunction?.current?.click();
	};
	const { mutate, isPending, error } = useRegister({ onSuccess });

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

	console.info(checkUserName);
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
							className="min-w-fit rounded-s-md border-e-0 bg-gray-50 dark:bg-gray-700 dark:border-gray-700 dark:text-gray-400 flex items-center h-10 px-4 text-sm text-gray-500 border border-gray-200 cursor-pointer"
						>
							<LuMail />
						</label>
						<FormInput
							name="email"
							placeholder={t("email")}
							className="rounded-e-md h-10"
						/>
					</section>
					<section className="flex w-full">
						<label
							htmlFor="username"
							className="min-w-fit rounded-s-md border-e-0 bg-gray-50 dark:bg-gray-700 dark:border-gray-700 dark:text-gray-400 flex items-center h-10 px-4 text-sm text-gray-500 border border-gray-200 cursor-pointer"
						>
							<LuUser />
						</label>
						<FormInput name="username" placeholder={t("username")} />
					</section>
					<section className="flex w-full">
						<label
							htmlFor="password"
							className="min-w-fit rounded-s-md border-e-0 bg-gray-50 dark:bg-gray-700 dark:border-gray-700 dark:text-gray-400 flex items-center h-10 px-4 text-sm text-gray-500 border border-gray-200 cursor-pointer"
						>
							<LuKeyRound />
						</label>
						<FormInput name="password" placeholder={t("password")} />
					</section>
					<section>
						<section className="gap-x-6 flex">
							<div className="gap-x-2 flex items-center">
								<Radio name="gender" value="male" />
								<label htmlFor="male">{t("male")}</label>
							</div>
							<div className="gap-x-2 flex items-center">
								<Radio name="gender" value="female" />
								<label htmlFor="female">{t("female")}</label>
							</div>
							<div className="gap-x-2 flex items-center">
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
						className="hover:bg-teal-700 w-full bg-teal-600 rounded-md"
						disabled={isPending}
					>
						{isPending ? <Spinner /> : t("sign-up")}
					</Button>

					<section className="w-3/4">
						<span>{t("already-have-an-account")} </span>
						<Link href="/login" className="font-semibold text-teal-500">
							{t("login")}
						</Link>
					</section>
					<DividerText text={t("or")} />
					<AuthShape
						authImage={Google}
						text={t("continue-with-google")}
						className="w-3/4 m-auto"
					/>
					<AuthShape
						authImage={Facebook}
						text={t("continue-with-facebook")}
						className="w-3/4 m-auto"
					/>
				</section>
			</form>
		</FormProvider>
	);
}
