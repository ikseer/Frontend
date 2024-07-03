"use client";

import { Link, usePathname } from "@/navigation";
import { useTranslations } from "next-intl";
import Image from "next/image";
import { LangSwitch } from "./lang-switch";
import { DashboardSection } from "./left-sidebar";

import { LogOut } from "lucide-react";
import "./open.css";
import { setSession, useCurrentUser } from "@ikseer/api/config/session.client";
import { useGetMe } from "@ikseer/api/hooks/accounts";
import { cn, getAvatarLink } from "@ikseer/lib/utils";
import { Button } from "@ikseer/ui/components/ui/button";
import { Skeleton } from "@ikseer/ui/components/ui/skeleton";
import { SwitchTheme } from "./switch-theme";

export default function SmallScreenNavbar() {
	const session = useCurrentUser();
	const currentPath = usePathname();

	return (
		<div className="md:hidden">
			<header className="dark:bg-zinc-950 border-zinc-200 md:flex-nowrap md:justify-start md:py-0 bg-zinc-300 z-1 flex flex-wrap w-full py-3 text-sm border-b">
				<nav
					className="relative flex md:flex flex-wrap md:justify-between items-center md:items-center mx-auto px-4 md:px-6 lg:px-8 w-full max-w-[85rem] basis-full"
					aria-label="Global"
				>
					<div className="gap-x-1 flex items-center">
						<Link
							className={cn(
								currentPath === "/" && "font-bold",
								"flex items-center text-lg",
							)}
							aria-label="Ikseer"
							href="/"
						>
							<Image
								src="/logo.jpg"
								alt="tekview logo"
								width={79}
								height={40}
							/>
						</Link>
					</div>

					<div className="ps-3 md:ps-6 md:ms-6 gap-x-2 md:border-s md:border-zinc-300 md:hidden ms-auto flex items-center">
						<button
							type="button"
							className="text-zinc-800 border-zinc-200 dark:border-zinc-700 hover:bg-zinc-100 dark:hover:bg-zinc-700 disabled:opacity-50 dark:text-white disabled:pointer-events-none size-9 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-zinc-600 flex items-center justify-center text-sm font-semibold border rounded-lg"
							data-hs-overlay="#navbar-offcanvas-example"
							aria-controls="navbar-offcanvas-example"
							aria-label="Toggle navigation"
						>
							<svg
								className="hs-collapse-open:hidden size-4 flex-shrink-0"
								xmlns="http://www.w3.org/2000/svg"
								width="24"
								height="24"
								viewBox="0 0 24 24"
								fill="none"
								stroke="currentColor"
								strokeWidth="2"
								strokeLinecap="round"
								strokeLinejoin="round"
							>
								<line x1="3" x2="21" y1="6" y2="6" />
								<line x1="3" x2="21" y1="12" y2="12" />
								<line x1="3" x2="21" y1="18" y2="18" />
								<title> dropdown</title>
							</svg>
							<svg
								className="hs-collapse-open:block size-4 flex-shrink-0 hidden"
								xmlns="http://www.w3.org/2000/svg"
								width="24"
								height="24"
								viewBox="0 0 24 24"
								fill="none"
								stroke="currentColor"
								strokeWidth="2"
								strokeLinecap="round"
								strokeLinejoin="round"
							>
								<path d="M18 6 6 18" />
								<path d="m6 6 12 12" />
								<title> dropdown</title>
							</svg>
						</button>
					</div>

					<div
						id="navbar-offcanvas-example"
						className="md:block top-0 z-[60] md:z-40 md:static fixed border-e border-zinc-300 md:order-2 hidden bg-zinc-100 md:border-r-transparent md:dark:border-r-transparent w-full md:w-auto max-w-xs md:max-w-none h-full md:h-auto transform transition-all md:transition-none -translate-x-full hs-overlay-open:translate-x-0 md:translate-x-0 duration-300 basis-full grow hs-overlay start-0 md:basis-auto dark:bg-zinc-950"
						tabIndex={-1}
						data-hs-overlay-close-on-resize
					>
						<div className="md:flex-row md:justify-end md:items-center gap-x-0 gap-y-4 md:gap-y-0 md:gap-x-7 md:mt-0 md:px-0 md:ps-7 flex flex-col px-5 mt-5">
							{session && <GreetingSection />}
							<DashboardLinks />
							<SiteMap />
							<SideNavFooter />
						</div>
					</div>
				</nav>
			</header>
		</div>
	);
}

function GreetingSection() {
	const session = useCurrentUser();
	if (!session) return;
	const me = useGetMe();
	if (me?.isLoading) {
		<div className="flex items-center gap-2 pb-3 border-zinc-300  border-b-[2px] md:border-b-[0px] cursor-pointer">
			<Skeleton className="w-7 h-7 rounded-full" />
			<Skeleton className="w-20 h-4" />
		</div>;
	}
	if (me?.isError)
		return <div>Error loading your info: {me?.error?.message}</div>;
	if (!me?.data) return null;

	return (
		<section className="flex items-center justify-between border-zinc-300  border-b-[2px] md:border-b-[0px] pb-3 w-full">
			<div className="flex items-center gap-2 cursor-pointer">
				<img
					src={getAvatarLink(me.data)}
					alt={"user avatar"}
					className="w-7 h-7 rounded-full"
				/>
				<Link
					className="hover:text-black/70 text-base font-medium"
					href="/profile"
				>
					{me.data.fullName}
				</Link>
			</div>
		</section>
	);
}

function DashboardLinks() {
	const session = useCurrentUser();
	if (!session) return;
	return <DashboardSection className="border-zinc-300  border-b-[2px]" />;
}

function SiteMap() {
	return (
		<div className="border-zinc-300 pb-3 border-b-[2px] md:border-b-[0px] ">
			<h3 className="text-zinc-800 dark:text-zinc-200 mb-3 text-2xl font-medium">
				Site map
			</h3>
			<div className="gap-y-2 flex flex-col ml-2 text-base font-medium text-black">
				<NavLink href="/">Home</NavLink>
				<NavLink href="/products">Products</NavLink>
				<NavLink href="/best-sellers">Best seller</NavLink>
				<NavLink href="/discounts">Discount</NavLink>
			</div>
		</div>
	);
}

function SideNavFooter() {
	const t = useTranslations("NavBar");
	const session = useCurrentUser();
	return (
		<div className="space-y-4 text-base font-medium cursor-pointer">
			<LangSwitch />
			<SwitchTheme />
			{session ? (
				<Button
					variant="ghost"
					onClick={() => {
						setSession(null);
						window.location.href = "/";
					}}
				>
					<LogOut />
					{t("logout")}
				</Button>
			) : (
				<div className="flex flex-col gap-2">
					<Link
						href="/login"
						className="w-full border-zinc-300 border-s-[2px] font-semibold text-primary hover:underline ps-4"
					>
						Loging
					</Link>
					<Button asChild rounded className="ms-4" variant="submit">
						<Link href="/register">Resgister</Link>
					</Button>
				</div>
			)}
		</div>
	);
}

export function NavLink({
	href,
	children,
}: { href: string; children: React.ReactNode }) {
	const currPath = usePathname();

	return (
		<Link
			className={
				currPath === href
					? "text-teal-500 font-bold"
					: "text-zinc-800 dark:text-zinc-300 hover:text-zinc-800/70 dark:hover:text-zinc-200/70"
			}
			href={href}
		>
			{children}
		</Link>
	);
}
