"use client";

import Logout from "@/app/[locale]/_components/logout";
import { usePermissions } from "@/hooks/use-permissions";
import { cn } from "@ikseer/lib/utils";
import { Link, usePathname, useRouter } from "@/navigation";
import {
	AppShell,
	Burger,
	Button,
	Divider,
	Group,
	Stack,
	Text,
	TextInput,
} from "@mantine/core";
import { useForm } from "@mantine/form";
import { useDisclosure } from "@mantine/hooks";
import {
	IconDashboard,
	IconPlus,
	IconStethoscope,
	IconUser,
} from "@tabler/icons-react";
import { useTranslations } from "next-intl";
import Image from "next/image";
import LangSwitch from "../_components/lang-switch";
import { ThemeSwitch } from "../_components/theme-switch";
import { Routes } from "@/lib/routes";

export default function CollapseDesktop({
	children,
}: { children: React.ReactNode }) {
	const [mobileOpened, { toggle: toggleMobile }] = useDisclosure();
	const [desktopOpened, { toggle: toggleDesktop }] = useDisclosure(true);
	const t = useTranslations("Navbar");
	const perms = usePermissions();
	return (
		<AppShell
			header={{ height: 60 }}
			navbar={{
				width: 300,
				breakpoint: "sm",
				collapsed: { mobile: !mobileOpened, desktop: !desktopOpened },
			}}
			padding="md"
		>
			<AppShell.Header>
				<Group h="100%" px="md">
					<Burger
						opened={mobileOpened}
						onClick={toggleMobile}
						hiddenFrom="sm"
						size="sm"
					/>
					<Burger
						opened={desktopOpened}
						onClick={toggleDesktop}
						visibleFrom="sm"
						size="sm"
					/>
					<Image
						src="/en/icon.png"
						width={30}
						height={30}
						alt="ZU hospital logo"
					/>
					<div className="hidden md:flex items-center gap-2 h-full grow">
						<SearchField className="min-w-0 md:basis-[300px] lg:basis-[600px] shrink" />
						<div className="grow" />
						<AddPatientButton />
						<LangSwitch />
						<ThemeSwitch />
						<Divider orientation="vertical" />
						<Logout />
					</div>
				</Group>
			</AppShell.Header>
			{/* TODO: fix for small screens */}
			<AppShell.Navbar p="md">
				<Text fw="bold" size="xl">
					{t("zu-hospital")}
				</Text>
				<SearchField className="w-full md:hidden mt-4" />
				<Stack gap={"md"} mt="md">
					{perms.dashboard.canSeeDashboard() && (
						<NavLink href="/dashboard">
							<IconDashboard /> {t("dashboard")}
						</NavLink>
					)}
					{perms.patient.canSeePatient() && (
						<NavLink href="/dashboard/patients">
							<IconUser /> {t("patients")}
						</NavLink>
					)}
					{perms.doctor.canSeeDoctors() && (
						<NavLink href="/dashboard/doctors">
							<IconStethoscope /> {t("doctors")}
						</NavLink>
					)}
					{perms.employee.canSeeEmployees() && (
						<NavLink href="/dashboard/employees">
							<IconStethoscope /> {t("employees")}
						</NavLink>
					)}
				</Stack>
				<div className="md:hidden mt-4">
					<Divider mb="md" />
					<div className="gap-2 grid grid-cols-2">
						<LangSwitch />
						<ThemeSwitch />
					</div>
					<Logout width="100%" mt="md" />
				</div>
			</AppShell.Navbar>
			<AppShell.Main>{children}</AppShell.Main>
		</AppShell>
	);
}

function NavLink({
	href,
	children,
}: { href: string; children: React.ReactNode }) {
	const pathname = usePathname();
	const active = pathname === href;
	return (
		<Link
			href={href}
			aria-current={active ? "page" : undefined}
			className={cn(
				"px-4 py-2 bg-slate-100 border-s-4 border-transparent hover:bg-slate-200 dark:bg-zinc-900/70 dark:hover:bg-zinc-900 rounded",
				active && "border-cyan-600 font-bold",
			)}
		>
			<Group>{children}</Group>
		</Link>
	);
}

function SearchField({ className }: { className?: string }) {
	const t = useTranslations("Dashboard");
	const perms = usePermissions();
	const form = useForm({ initialValues: { q: "" } });
	const router = useRouter();
	if (!perms.patient.canSeePatient()) return null;
	return (
		<form
			className={className}
			onSubmit={form.onSubmit(({ q }) => {
				router.push(
					Routes.patients(
						{},
						{
							search: { q },
						},
					),
				);
			})}
		>
			<TextInput
				placeholder={t("search-placeholder")}
				leftSection="🔎"
				{...form.getInputProps("q")}
			/>
		</form>
	);
}

function AddPatientButton() {
	const t = useTranslations("Navbar");
	const perms = usePermissions();
	if (!perms.patient.canCreatePatient()) return null;
	return (
		<Link href="/dashboard/add-patient">
			<Button leftSection={<IconPlus />} className="min-w-fit">
				{t("add-patient")}
			</Button>
		</Link>
	);
}
