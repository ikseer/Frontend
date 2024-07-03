import LargeScreenNavbar from "./large-screen";
import SmallScreenNavbar from "./small-screen";

export default function Navbar() {
	return (
		<nav>
			<LargeScreenNavbar />
			<SmallScreenNavbar />
		</nav>
	);
}
