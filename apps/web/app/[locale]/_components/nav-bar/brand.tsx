import { Link } from "@/navigation";

export function Brand() {
	return (
		<div>
			<Link
				className="dark:text-white flex-none text-xl font-semibold"
				href="/"
				aria-label="Brand"
			>
				Ikseer
			</Link>
		</div>
	);
}
