import { Link } from "@/navigation";
import { getLink } from "@ikseer/lib/utils";

import Image from "next/image";
import AddDeleteItem from "./add-delete-item";
import WishList from "./wishlist";

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
	console.log(productId);

	return (
		<section className="group rounded-t-xl relative overflow-hidden">
			<Link href={`/products/${productId}`}>
				<Image
					className="aspect-[4/3] object-cover w-full transition ease-in-out rounded-t-xl hover:scale-110"
					src={getLink(src)}
					alt={alt}
					width={50}
					height={50}
				/>
			</Link>
			<section className="absolute text-end  bottom-[5px]  w-full group/addButton hidden group-hover:block">
				<div className="me-2">
					<AddDeleteItem productId={productId} className="ms-auto" />
				</div>
			</section>
			<section className="group-hover:flex top-2 right-4 absolute z-10 items-center justify-center hidden w-10 h-10 p-2 rounded-lg">
				<WishList id={productId} isWishList={false} />
			</section>
		</section>
	);
}
