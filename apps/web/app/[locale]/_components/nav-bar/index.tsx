import { Link } from "lucide-react";
import Image from "next/image";
import { SwitchLang } from "../switch-lang";
import { SwitchTheme } from "../switch-theme";
import { LoginOrProfile } from "./login-or-profile";
import { ResponsiveAction } from "./responsive-actions";
import { ShoppingCart } from "./shopping-cart";

export default function GuestNavBar() {
	return (
		<>
			<div className="nav" />
			<header className="fixed top-0 z-50 flex flex-wrap w-full text-sm bg-white nav md:justify-start md:flex-nowrap">
				<nav
					className="relative w-full px-4 py-3 border border-gray-200 md:flex md:items-center md:justify-between md:py-0 md:px-6 lg:px-8 xl:mx-auto dark:border-gray-700 dark:bg-zinc-950"
					aria-label="Global"
				>
					<div className="flex items-center justify-between">
						<Link
							className="text-xl font-semibold dark:text-white"
							href="/"
							aria-label="Brand"
						>
							<Image src="/icon.jpg" alt="Ikseer" width={20} height={20} />
						</Link>
						<ResponsiveAction />
					</div>

					<div
						id="navbar-collapse-with-animation"
						className="hidden overflow-hidden transition-all duration-300 hs-collapse basis-full grow md:block"
					>
						<div className="flex flex-col mt-5 gap-y-4 gap-x-0 md:flex-row md:items-center md:justify-end md:gap-y-0 md:gap-x-7 md:mt-0 md:ps-7">
							<SwitchTheme />
							<SwitchLang />
							<ShoppingCart />
							<LoginOrProfile />
						</div>
					</div>
				</nav>
			</header>
		</>
	);
}
