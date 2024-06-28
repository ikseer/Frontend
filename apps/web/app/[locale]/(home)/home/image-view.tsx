import { Link } from "@/navigation";
import { getLink } from "@ikseer/lib/utils";
import { Button } from "@ikseer/ui/src/components/ui/button";
import { Minus, Plus, ShoppingCart } from "lucide-react";
import Image from "next/image";

export default function ImageView({
	href,
	src,
	options,
	alt,
}: {
	href: string;
	src: string;
	options?: "TOPSALES" | "DISCOUNT";
	alt: string;
}) {
	console.log(options);
	return (
		<section className="relative overflow-hidden group/image rounded-t-xl">
			<Link href={href}>
				<Image
					className="aspect-[4/3] object-cover w-full transition ease-in-out rounded-t-xl hover:scale-110"
					src={getLink(src)}
					alt={alt}
					width={50}
					height={50}
				/>
			</Link>
			<div className="absolute right-[60px] bottom-[5px]  w-full group/addButton">
				<div className="items-center hidden ms-[-50px] mb-2 group-hover/addButton:flex gap-x-2">
					<Button variant="submit" iconOnly className="rounded-full">
						<Plus className="text-zinc-50 dark:text-zinc-950" />
					</Button>
					<p className="flex items-center px-3 py-1 text-xl bg-teal-600 rounded-full aspect-square">
						{23}
					</p>
					<Button variant="submit" iconOnly className="rounded-full">
						<Minus className="text-zinc-50 dark:text-zinc-950" />
					</Button>
				</div>
				<Button
					type="button"
					className="hidden p-2 rounded-full cursor-pointer group-hover/image:block"
					variant="submit"
				>
					<ShoppingCart className="text-zinc-50 dark:text-zinc-950" />
				</Button>
			</div>
		</section>
	);
}
