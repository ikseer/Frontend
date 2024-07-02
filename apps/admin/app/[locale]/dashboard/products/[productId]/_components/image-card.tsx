import type { ProductImage } from "@ikseer/lib/types";
import { getLink } from "@ikseer/lib/utils";
import { ActionIcon, Menu } from "@mantine/core";
import { MoreHorizontal, Trash2 } from "lucide-react";
import Image from "next/image";

export function ImageCard({ image }: { image: ProductImage }) {
	return (
		<div className="relative rounded overflow-hidden shadow-md">
			<Image
				alt="product"
				src={getLink(image.image)}
				width={700}
				height={1000}
				className="w-full"
			/>
			<Menu shadow="md" width={200}>
				<Menu.Target>
					<ActionIcon variant="default" className="absolute top-4 end-4">
						<MoreHorizontal />
					</ActionIcon>
				</Menu.Target>
				<Menu.Dropdown>
					<Menu.Label>Image actions</Menu.Label>
					<Menu.Item
						c="red"
						leftSection={<Trash2 />}
						onClick={() => {
							if (confirm("Are you sure you want to delete the image?")) {
								alert("not implemented yet");
							}
						}}
					>
						Delete
					</Menu.Item>
				</Menu.Dropdown>
			</Menu>
		</div>
	);
}
