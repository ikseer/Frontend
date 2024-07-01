import { Link } from "@/navigation";
import { getLink } from "@ikseer/lib/utils";
import { Button } from "@ikseer/ui/src/components/ui/button";
import { ShoppingCart } from "lucide-react";
import Image from "next/image";
import AddDeleteItem from "../_components/add-delete-item";

export default function ImageView({
	productId,
	src,
	alt,
	topSales: _,
	hasDiscount: __,
}: {
	productId: string;
	src: string;
	alt: string;
	topSales?: boolean;
	hasDiscount?: boolean;
}) {
	return (
		<section className="relative overflow-hidden group/image rounded-t-xl">
			<Link href={`/products/${productId}`}>
				<Image
					className="aspect-[4/3] object-cover w-full transition ease-in-out rounded-t-xl hover:scale-110"
					src={getLink(src)}
					alt={alt}
					width={50}
					height={50}
				/>
			</Link>
			<div className="absolute  rtl:right-[60px] ltr:left-[200px]  bottom-[5px] w-full group/addButton">
				<div className="items-center hidden ms-[-50px] mb-2 group-hover/addButton:flex gap-x-2">
					<AddDeleteItem productId={productId} />
					{/* <Button
						variant="submit"
						iconOnly
						className="rounded-full"
						onClick={handleAddItem}
					>
						<Plus className="text-zinc-50 dark:text-zinc-950" />
					</Button>
					<p className="flex items-center px-3 py-1 text-xl bg-teal-600 rounded-full aspect-square">
						{productQuantity}
					</p>
					<Button
						variant="submit"
						iconOnly
						className="rounded-full"
						disabled={productQuantity === 0}
						onClick={handleMinusItem}
					>
						<Minus className="text-zinc-50 dark:text-zinc-950" />
					</Button> */}
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
