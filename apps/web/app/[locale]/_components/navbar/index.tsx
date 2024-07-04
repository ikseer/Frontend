import { LargeScreenNavbar } from "./large-screen";
import { SmallScreenNavbar } from "./small-screen";

export function Navbar() {
	return (
		<nav>
			<LargeScreenNavbar />
			<SmallScreenNavbar />
		</nav>
	);
}
