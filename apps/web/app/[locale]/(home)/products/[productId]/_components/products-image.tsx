import ImageMagnifier from "@/components/image-mangifiter";
import type { ProductImage } from "@ikseer/lib/types";
import { cn } from "@ikseer/lib/utils";
import Image from "next/image";
import { useState } from "react";

export default function ProductsImage({ images }: { images: ProductImage[] }) {
	const [img, setImg] = useState(images[0].image);
	return (
		<section className="flex items-center gap-2">
			<div className="space-y-4">
				{images.map((item) => (
					<div
						key={item.id}
						onClick={() => setImg(item.image)}
						onKeyDown={() => setImg(item.image)}
					>
						<Image
							src={item.image}
							alt="new Image"
							className={cn(
								"w-full rounded-sm cursor-pointer rounded-lg",
								item.image === img &&
									"shadow-lg outline outline-4 outline-offset-2 outline-teal-600 rounded-lg",
							)}
							width={200}
							height={200}
						/>
					</div>
				))}
			</div>
			<ImageMagnifier
				src={img}
				alt="new Image"
				className="w-full cursor-pointer"
				width={500}
				height={500}
			/>
		</section>
	);
}
