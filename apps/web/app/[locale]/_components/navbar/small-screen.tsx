"use client";

import { Link, usePathname } from "@/navigation";
import { AlignJustify, LogOut } from "lucide-react";
import Image from "next/image";
import { LangSwitch } from "./lang-switch";
import "./open.css";
import { useGetMe } from "@ikseer/api/hooks/accounts";
import { setSession, useCurrentUser } from "@ikseer/api/utils/session.client";
import { UserIdCookie, UserTypeCookie } from "@ikseer/lib/cookies.client";
import { cn, getAvatarLink } from "@ikseer/lib/utils";
import { Button } from "@ikseer/ui/components/ui/button";
import {
	Sheet,
	SheetContent,
	SheetTrigger,
} from "@ikseer/ui/components/ui/sheet";
import { Skeleton } from "@ikseer/ui/components/ui/skeleton";
import CartIcon from "./cart-icon";
import { SwitchTheme } from "./switch-theme";

export function SmallScreenNavbar() {
	const session = useCurrentUser();
	const currentPath = usePathname();

	return (
		<header className="md:hidden dark:bg-zinc-950 border-zinc-200 md:flex-nowrap md:justify-start md:py-0 bg-zinc-300 z-1 flex flex-wrap w-full py-3 text-sm border-b">
			<nav
				className="relative  flex flex-wrap justify-between items-center md:items-center mx-auto px-4 md:px-6 lg:px-8 w-full max-w-[85rem] basis-full"
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
						<Image src="/en/icon.png" alt="tekview logo" width={79} height={40} />
					</Link>
				</div>

				<Sheet>
					<SheetTrigger asChild>
						<button
							type="button"
							className="text-zinc-800 border-zinc-200 dark:border-zinc-700 hover:bg-zinc-100 dark:hover:bg-zinc-700 disabled:opacity-50 dark:text-white disabled:pointer-events-none size-9 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-zinc-600 flex items-center justify-center text-sm font-semibold border rounded-lg"
							data-hs-overlay="#navbar-offcanvas-example"
							aria-controls="navbar-offcanvas-example"
							aria-label="Toggle navigation"
						>
							<AlignJustify />
						</button>
					</SheetTrigger>
					<SheetContent>
						<div className="md:flex-row md:justify-end md:items-center gap-x-0 gap-y-4 md:gap-y-0 md:gap-x-7 md:mt-0 md:px-0 md:ps-7 flex flex-col px-5 mt-5 space-y-6">
							{session && <GreetingSection />}

							<SiteMap />
							<SideNavFooter />
						</div>
					</SheetContent>
				</Sheet>
			</nav>
		</header>
	);
}

function GreetingSection() {
	const session = useCurrentUser();
	if (!session) return;
	const me = useGetMe();
	if (me?.isLoading) {
		<div className="flex items-center gap-2 pb-6 border-zinc-300  border-b-[2px] md:border-b-[0px] cursor-pointer">
			<Skeleton className="w-7 h-7 rounded-full" />
			<Skeleton className="w-20 h-4" />
		</div>;
	}
	if (me?.isError)
		return <div>Error loading your info: {me?.error?.message}</div>;
	if (!me?.data) return null;

	return (
		<section className="flex items-center justify-between border-zinc-300  border-b-[2px] md:border-b-[0px] pb-6 w-full">
			<section className="flex items-center justify-between gap-2 cursor-pointer">
				<div className="gap-x-1 flex items-center">
					<Image
						src={getAvatarLink(me.data)}
						alt={"user avatar"}
						className="w-6 h-6 rounded-full"
						width={100}
						height={100}
					/>
					<Link
						className="text-zinc-900 hover:text-zinc-950 dark:text-zinc-200 dark:hover:text-zinc-300 text-sm font-medium"
						href={`/user/${me.data.id}`}
					>
						{me.data.first_name}
					</Link>
				</div>
				<CartIcon />
			</section>
		</section>
	);
}

function SiteMap() {
	return (
		<div className="border-zinc-300 pb-6 border-b-[2px] ">
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
	const session = useCurrentUser();
	return (
		<section className=" space-y-6 text-base font-medium cursor-pointer">
			<div className="space-y-4">
				<LangSwitch />
				<SwitchTheme />
			</div>
			<div className="border-zinc-300 pt-6 border-t-[2px]">
				{session ? (
					<Button
						variant="ghost"
						onClick={() => {
							setSession(null);
							UserIdCookie.delete();
							UserTypeCookie.delete();
							window.location.href = "/";
						}}
					>
						<LogOut /> &nbsp; Logout
					</Button>
				) : (
					<div className="flex flex-col gap-2">
						<Link
							href="/login"
							className="border-zinc-300 text-primary hover:underline ps-4 w-full font-semibold text-center"
						>
							Login
						</Link>
						<Button asChild rounded className="ms-4" variant="submit">
							<Link href="/register">Resgister</Link>
						</Button>
					</div>
				)}
			</div>
		</section>
	);
}

export function NavLink({
	href,
	children,
	className,
}: { href: string; children: React.ReactNode; className?: string }) {
	const currPath = usePathname();

	return (
		<Link
			className={cn(
				currPath === href
					? "text-teal-500 font-bold"
					: "text-zinc-800 dark:text-zinc-300 hover:text-zinc-800/70 dark:hover:text-zinc-200/70",
				className,
			)}
			href={href}
		>
			{children}
		</Link>
	);
}
