"use client";
import type { ProductImage } from "@ikseer/lib/types";
import { getLink } from "@ikseer/lib/utils";
import Image from "next/image";
import { useState } from "react";

export default function ShowImage({ images }: { images: ProductImage }) {
	const [currPriority, setCurrPriority] = useState(1);
	return (
		<section>
			{Array.isArray(images) &&
				images.map((item) =>
					currPriority === item.priority ? (
						<Image
							key={item.priority}
							src={getLink(item.image)}
							alt="new Image"
							className="w-full"
							width={500}
							height={500}
						/>
					) : null,
				)}
			<div className="flex justify-center mt-3 gap-x-3 x">
				{Array.isArray(images) &&
					images.map((item) => (
						<Image
							key={item.priority}
							src={getLink(item.image)}
							alt="new Image"
							className="w-2/12 rounded-sm cursor-pointer"
							width={200}
							height={200}
							onClick={() => setCurrPriority(item.priority)}
						/>
					))}
			</div>
		</section>
	);
}
