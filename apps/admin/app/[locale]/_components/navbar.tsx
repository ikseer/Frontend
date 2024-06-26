import LangSwitch from "./lang-switch";
import { ThemeSwitch } from "./theme-switch";

export default function Navbar() {
	return (
		<nav className="shadow-lg nav-height p-2 flex justify-end items-center gap-2 bg-neutral-100 dark:bg-neutral-900">
			<LangSwitch />
			<ThemeSwitch />
		</nav>
	);
}
