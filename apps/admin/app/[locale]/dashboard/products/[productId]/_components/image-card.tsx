import { imagesHooks } from "@ikseer/api/hooks/products";
import type { ProductImage } from "@ikseer/lib/types";
import { getLink } from "@ikseer/lib/utils";
import { ActionIcon, Button, Card, Flex } from "@mantine/core";
import { ArrowDown, ArrowUp, Trash2 } from "lucide-react";
import Image from "next/image";
import { revalidateProducts } from "./utils.server";

export function ImageCard({
	isLoading,
	index,
	isLast,
	image,
	onSwap,
}: {
	index: number;
	isLoading: boolean;
	isLast: boolean;
	image: ProductImage;
	onSwap: (i: number, j: number) => void;
}) {
	const del = imagesHooks.useDelete({
		onSuccess: () => {
			revalidateProducts();
		},
	});
	return (
		<Card className="rounded overflow-hidden shadow-md">
			<Card.Section>
				<Image
					alt="product"
					src={getLink(image.image)}
					width={700}
					height={1000}
					className="w-full"
				/>
			</Card.Section>
			<Flex mt="md" gap="md" align={"center"} justify={"end"}>
				<ActionIcon
					variant="outline"
					disabled={index === 0 || isLoading}
					onClick={() => onSwap(index, index - 1)}
				>
					<ArrowUp />
				</ActionIcon>
				<ActionIcon
					variant="outline"
					disabled={isLast || isLoading}
					onClick={() => onSwap(index, index + 1)}
				>
					<ArrowDown />
				</ActionIcon>
				<Button
					c="red"
					loading={del.isPending}
					variant="transparent"
					leftSection={<Trash2 />}
					onClick={() => {
						if (confirm("Are you sure you want to delete the image?")) {
							del.mutate({ id: image.id });
						}
					}}
				>
					Delete
				</Button>
			</Flex>
		</Card>
	);
}
