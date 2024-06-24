// main
"use client";
import { Link } from "@/navigation";
import { usePathname } from "next/navigation";
import ProfileDropDown from "./profile-dropdown";

export function LoginOrProfile() {
	let pathname = usePathname();
	pathname = pathname.slice(3);
	const isRigster = false;
	return (
		<>
			{isRigster ? (
				<ProfileDropDown />
			) : (
				<>
					<Link
						href="/login"
						className={
							pathname === "/login"
								? "bg-teal-500 rounded-full px-4 py-2 text-white"
								: "text-teal-500"
						}
					>
						Login
					</Link>
					<Link
						href="/register"
						className={
							pathname === "/register"
								? "bg-teal-500 rounded-full px-4 py-2 text-white"
								: "text-teal-500"
						}
					>
						Register
					</Link>
				</>
			)}
		</>
	);
}
