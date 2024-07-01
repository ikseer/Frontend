"use client";
import { AFTER_LOGOUT_REDIRECT } from "@/lib/constants";
import { Link, usePathname } from "@/navigation";
import { setSession } from "@ikseer/api/config/session.client";
import { useGetMe } from "@ikseer/api/hooks/accounts";
import { UserIdCookie, UserTypeCookie } from "@ikseer/lib/cookies.client";
import { cn } from "@ikseer/lib/utils";
import { Button } from "@ikseer/ui/components/ui/button";
import {
	DropdownMenu,
	DropdownMenuCheckboxItem,
	DropdownMenuContent,
	DropdownMenuSeparator,
	DropdownMenuTrigger,
} from "@ikseer/ui/components/ui/dropdown-menu";

export function LoginOrProfile() {
	const currentPath = usePathname();
	const me = useGetMe();
	const currentUser = me?.data?.results?.[0];
	console.log(currentUser, "navbar me");

	return (
		<section className="flex items-center justify-between gap-x-2">
			{currentUser?.id ? (
				<ProfileDropdown href={`/user/${currentUser?.id}`} />
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
		</section>
	);
}

// function NavLink({ href, children }: { href: string; children: string }) {
// 	const currentPath = usePathname();

// 	return (
// 		<Link
// 			href={href}
// 			className={cn(
// 				currentPath === "/register"
// 					? "bg-teal-500 rounded-full px-4 py-2 text-white"
// 					: "text-teal-500",
// 			)}
// 		>
// 			{children}
// 		</Link>
// 	);
// }

export function ProfileDropdown({ href }: { href: string }) {
	return (
		<DropdownMenu>
			<DropdownMenuTrigger asChild>
				<Button variant="outline">User Profile Image</Button>
			</DropdownMenuTrigger>
			<DropdownMenuContent className="w-56">
				<DropdownMenuSeparator />
				<DropdownMenuCheckboxItem>
					<Link href={href}>Profile</Link>
				</DropdownMenuCheckboxItem>
				<DropdownMenuCheckboxItem
					onClick={() => {
						setSession(null);
						UserIdCookie.delete();
						UserTypeCookie.delete();
						window.location.href = AFTER_LOGOUT_REDIRECT;
					}}
				>
					Logout
				</DropdownMenuCheckboxItem>
			</DropdownMenuContent>
		</DropdownMenu>
	);
}
