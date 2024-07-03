"use client";

import Logout from "@/app/[locale]/_components/logout";
import { usePermissions } from "@/hooks/use-permissions";
import { Routes } from "@/lib/routes";
import { usePathname, useRouter } from "@/navigation";
import {
	AppShell,
	Burger,
	Divider,
	Group,
	NavLink,
	type NavLinkProps,
	Stack,
	Text,
	TextInput,
} from "@mantine/core";
import { useForm } from "@mantine/form";
import { useDisclosure } from "@mantine/hooks";
import { Gauge, Pill, Stethoscope, Ticket, User } from "lucide-react";
import { useTranslations } from "next-intl";
import Image from "next/image";
import LangSwitch from "../_components/lang-switch";
import { ThemeSwitch } from "../_components/theme-switch";

export default function CollapseDesktop({
	children,
}: {
	children: React.ReactNode;
}) {
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
					Ikseer <br />
					<Text size="sm" c="gray.5">
						Smart pharmacy
					</Text>
				</Text>
				<SearchField className="w-full md:hidden mt-4" />
				<Stack mt="md">
					{perms.dashboard.canSeeDashboard() && (
						<MyNavLink
							href="/dashboard"
							leftSection={<Gauge />}
							label={t("dashboard")}
						/>
					)}
					{perms.patient.canSeePatient() && (
						<MyNavLink
							href="/dashboard/patients"
							leftSection={<User />}
							label={t("patients")}
						/>
					)}
					{perms.doctor.canSeeDoctors() && (
						<MyNavLink
							href="/dashboard/doctors"
							leftSection={<Stethoscope />}
							label={t("doctors")}
						/>
					)}
					<MyNavLink
						href="/dashboard/coupons"
						leftSection={<Ticket />}
						label={"Coupons"}
					/>
					<MyNavLink
						href="/dashboard/products"
						leftSection={<Pill />}
						label={t("products")}
					/>
					{/* {perms.employee.canSeeEmployees() && (
						<MyNavLink
							label={t("employees")}
							href="/dashboard/employees"
							leftSection={<Stethoscope />}
						/>
					)} */}
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

function MyNavLink(props: NavLinkProps & { href: string }) {
	const pathname = usePathname();
	const active = pathname === props.href;
	return (
		<NavLink
			aria-current={active ? "page" : undefined}
			active={active}
			{...props}
		/>
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
					Routes.products(
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
