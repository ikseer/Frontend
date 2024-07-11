import { Link } from "@/navigation";
import { getLink } from "@ikseer/lib/utils";

import Image from "next/image";
import AddDeleteItem from "./add-delete-item";
import AddToWishList from "./add-to-wishlist";

export default function ImageView({
	productId,
	src,
	alt,
	topSales,
}: {
	productId: string;
	src: string;
	alt: string;
	topSales?: boolean;
}) {
	return (
		<section className="group rounded-t-xl relative overflow-hidden">
			<Link href={`/products/${productId}`}>
				<Image
					className="aspect-[5/3] object-cover w-full transition ease-in-out rounded-t-xl hover:scale-110"
					src={getLink(src)}
					alt={alt}
					width={400}
					height={400}
				/>
			</Link>
			<section className="absolute text-end  bottom-[5px]  w-full group/addButton hidden group-hover:block">
				<div className="me-2">
					<AddDeleteItem productId={productId} className="ms-auto" />
				</div>
			</section>
			<section className="group-hover:flex top-2 right-4 absolute z-10 items-center justify-center hidden w-10 h-10 p-2 rounded-lg">
				<AddToWishList id={productId} />
			</section>
			{topSales && (
				<section className="group-hover:flex top-2 left-4 bg-gradient-to-r from-red-500 to-red-700 mix-blend-multiply absolute z-10 items-center justify-center hidden w-24 p-1 font-semibold text-black rounded-lg shadow-lg">
					Top Sales
				</section>
			)}
		</section>
	);
}
