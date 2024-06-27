"use client";
import { AFTER_LOGOUT_REDIRECT } from "@/lib/constants";
import { Link, usePathname, useRouter } from "@/navigation";
import { useGetPatient, useLogout } from "@ikseer/api/hooks/accounts";
import { cn } from "@ikseer/lib/utils";
import { Button } from "@ikseer/ui/src/components/ui/button";
import {
	DropdownMenu,
	DropdownMenuCheckboxItem,
	DropdownMenuContent,
	DropdownMenuSeparator,
	DropdownMenuTrigger,
} from "@ikseer/ui/src/components/ui/dropdown-menu";

export function LoginOrProfile() {
	const { data } = useGetPatient();
	const currentUser = data?.[0];
	return (
		<section className="flex items-center justify-between gap-x-2">
			{currentUser?.username ? (
				<ProfileDropdown href={`/user/${currentUser?.id}`} />
			) : (
				<>
					<NavLink href="/login">Login</NavLink>
					<NavLink href="/register">Register</NavLink>
				</>
			)}
		</section>
	);
}

function NavLink({ href, children }: { href: string; children: string }) {
	const currentPath = usePathname();

	return (
		<Link
			href={href}
			className={cn(
				currentPath === href
					? "bg-teal-500 rounded-full px-4 py-2 text-white"
					: "text-teal-500",
			)}
		>
			{children}
		</Link>
	);
}

export function ProfileDropdown({ href }: { href: string }) {
	const router = useRouter();
	const onSuccess = () => {
		router.push("/login");
		const url = new URL(window.location.href);
		url.pathname = AFTER_LOGOUT_REDIRECT;
		window.location.href = url.toString();
	};
	const logout = useLogout({ onSuccess });
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
						logout.mutate();
					}}
				>
					Logout
				</DropdownMenuCheckboxItem>
			</DropdownMenuContent>
		</DropdownMenu>
	);
}
