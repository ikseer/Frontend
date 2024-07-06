"use client";

import { Link, usePathname } from "@/navigation";
import { useGetMe } from "@ikseer/api/hooks/accounts";
import { setSession, useCurrentUser } from "@ikseer/api/utils/session.client";
import { cn, getAvatarLink } from "@ikseer/lib/utils";
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuSeparator,
	DropdownMenuTrigger,
} from "@ikseer/ui/components/ui/dropdown-menu";
import { Skeleton } from "@ikseer/ui/components/ui/skeleton";
import {
	CircleUserRound,
	CreditCard,
	LogOut,
	Menu,
	MessageCircle,
	ShoppingCart,
	X,
} from "lucide-react";
import Image from "next/image";
import CartIcon from "./cart-icon";
import { LangSwitch } from "./lang-switch";
import { NavLink } from "./small-screen";
import { SwitchTheme } from "./switch-theme";

export function LargeScreenNavbar() {
	const session = useCurrentUser();
	const currentPath = usePathname();

	return (
		<>
			<header
				className="hidden fixed ms z-50 md:flex flex-wrap sm:flex-nowrap sm:justify-start border-zinc-200 dark:border-zinc-700 bg-white 
dark:bg-zinc-950 border-b w-full text-sm  h-[70px] shadow-lg nav"
			>
				<nav
					className="sm:flex sm:justify-between sm:items-center relative w-full"
					aria-label="navigation bar"
				>
					<div className="flex items-center justify-between">
						<Link
							href="/"
							className={cn(
								currentPath === "/" && "font-bold",
								"flex items-center text-lg",
							)}
						>
							<Image
								src="/logo.jpg"
								alt="logo"
								width={60}
								height={40}
								priority
							/>
						</Link>
						<div className="sm:hidden">
							<button
								type="button"
								className="border-zinc-200 text-zinc-800 dark:border-zinc-700 hover:bg-zinc-100 dark:hover:bg-zinc-700 disabled:opacity-50 dark:text-white disabled:pointer-events-none hs-collapse-toggle size-9 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-zinc-600 flex items-center justify-center text-sm font-semibold border rounded-lg"
								data-hs-collapse="#navbar-collapse-with-animation"
								aria-controls="navbar-collapse-with-animation"
								aria-label="Toggle navigation"
							>
								<Menu
									size={24}
									className="hs-collapse-open:hidden size-4 flex-shrink-0"
								/>
								<X
									size={24}
									className="hs-collapse-open:block size-4 flex-shrink-0 hidden"
								/>
							</button>
						</div>
					</div>
					<div
						id="navbar-collapse-with-animation"
						className="sm:block grow hs-collapse hidden overflow-hidden transition-all duration-300"
					>
						<div className="sm:flex-row sm:items-center ms:ms-7 gap-x-0 gap-y-4 sm:gap-y-0 sm:gap-x-7 sm:mt-0 sm:ps-7 flex flex-col mt-5">
							<NavLink href="/products">Products</NavLink>
							<NavLink href="/best-sellers">Best sellers</NavLink>
							<NavLink href="/discounts">Discount</NavLink>
							<div className="gap-x-2 sm:ms-auto flex items-center">
								<LangSwitch />
								<SwitchTheme />
								{session ? (
									<>
										<UserDropdown />
									</>
								) : (
									<>
										<Link
											href="/login"
											className={cn(
												currentPath === "/login"
													? "px-4 py-2 text-white bg-teal-500 rounded-full"
													: "text-teal-500",
											)}
										>
											Login
										</Link>
										<Link
											href="/register"
											className={cn(
												currentPath !== "/login"
													? "px-4 py-2 text-white bg-teal-500 rounded-full"
													: "text-teal-500",
											)}
										>
											Register
										</Link>
									</>
								)}
								<CartIcon />
							</div>
						</div>
					</div>
				</nav>
			</header>
			<div className="nav" />
		</>
	);
}

function UserDropdown() {
	const me = useGetMe();
	if (me?.isLoading)
		return <Skeleton className="bg-slate-300 w-[40px] h-[40px] rounded-full" />;
	if (me?.isError) return;
	return (
		<section>
			<DropdownMenu>
				<DropdownMenuTrigger>
					{me?.data && (
						<div className="w-10 h-10">
							<Image
								className="object-cover w-full h-full rounded-full"
								src={getAvatarLink(me.data)}
								alt="user avatar"
								width={100}
								height={100}
							/>
						</div>
					)}
				</DropdownMenuTrigger>
				<DropdownMenuContent>
					{me?.data && (
						<>
							<DropdownMenuItem asChild>
								<Link href={`/user/${me.data.id}`}>
									<CircleUserRound className="w-5 h-5" strokeWidth={0.9} />{" "}
									&nbsp; profile
								</Link>
							</DropdownMenuItem>
							<DropdownMenuItem asChild>
								<Link href="/cart">
									<ShoppingCart className="w-5 h-5" strokeWidth={0.9} /> &nbsp;
									cart
								</Link>
							</DropdownMenuItem>
							<DropdownMenuItem asChild>
								<Link href="/orders">
									<CreditCard className="w-5 h-5" strokeWidth={0.9} /> &nbsp;
									Orders
								</Link>
							</DropdownMenuItem>
							<DropdownMenuItem asChild>
								<Link href="/chat">
									<MessageCircle className="w-5 h-5" strokeWidth={0.9} /> &nbsp;
									chat
								</Link>
							</DropdownMenuItem>
						</>
					)}
					<DropdownMenuSeparator />
					<DropdownMenuItem
						onClick={() => {
							setSession(null);
							window.location.href = "/";
						}}
					>
						<LogOut className="w-5 h-5" strokeWidth={0.9} /> &nbsp; Logout
					</DropdownMenuItem>
				</DropdownMenuContent>
			</DropdownMenu>
		</section>
	);
}
