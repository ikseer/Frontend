"use client";
import { useGetMe } from "@/api/hooks/accounts";
import { cn } from "@/lib/utils";
import { Link } from "@/navigation";
import { Button } from "@ikseer/ui/src/components/ui/button";
import {
	DropdownMenu,
	DropdownMenuCheckboxItem,
	DropdownMenuContent,
	DropdownMenuSeparator,
	DropdownMenuTrigger,
} from "@ikseer/ui/src/components/ui/dropdown-menu";
import { usePathname } from "next/navigation";
import React from "react";

export function LoginOrProfile() {
	const { data } = useGetMe();
	const currentUser = data?.[0];

	return (
		<section className="flex items-center justify-between">
			{currentUser?.username ? (
				<ProfileDropdown />
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

export function ProfileDropdown() {
	return (
		<DropdownMenu>
			<DropdownMenuTrigger asChild>
				<Button variant="outline">User Profile Image</Button>
			</DropdownMenuTrigger>
			<DropdownMenuContent className="w-56">
				<DropdownMenuSeparator />
				<DropdownMenuCheckboxItem
					onClick={() => {
						console.log("go to profile");
					}}
				>
					Profile
				</DropdownMenuCheckboxItem>
				<DropdownMenuCheckboxItem
					onClick={() => {
						console.log("logout");
					}}
				>
					Logout
				</DropdownMenuCheckboxItem>
			</DropdownMenuContent>
		</DropdownMenu>
	);
}
