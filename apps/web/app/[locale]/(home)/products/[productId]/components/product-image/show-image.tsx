"use client";
import { BACKEND_URL } from "@ikseer/lib/constants";
import Image from "next/image";
import { useState } from "react";

interface ImageProps {
	id: string;
	image: string;
	priority: number;
	product: string;
}
interface ShowImageProps {
	images: ImageProps[];
}

export default function ShowImage({ images }: ShowImageProps) {
	const sortedImages = images?.sort((a, b) => b.priority - a.priority);
	const [currPriority, setCurrPriority] = useState(1);
	console.log(currPriority, BACKEND_URL, "from show iamge", sortedImages);
	return (
		<div>
			{Array.isArray(sortedImages) &&
				sortedImages.map((item) =>
					currPriority === item.priority ? (
						<Image
							key={item.priority}
							src={`${BACKEND_URL}${item?.image}`}
							alt="new Image"
							className="w-full"
							width={500}
							height={500}
						/>
					) : null,
				)}
			<div className="gap-x-3 x flex justify-center mt-3">
				{Array.isArray(sortedImages) &&
					sortedImages.map((item) => (
						<Image
							key={item.priority}
							src={`${BACKEND_URL}${item?.image}`}
							alt="new Image"
							className="w-2/12 rounded-sm cursor-pointer"
							width={200}
							height={200}
							onClick={() => setCurrPriority(item.priority)}
						/>
					))}
			</div>
		</div>
	);
}
