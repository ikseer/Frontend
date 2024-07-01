import type { HomeProduct } from "@ikseer/lib/types";
import {
	getDiscountAmount,
	getDiscountdPrice,
	getLink,
} from "@ikseer/lib/utils";
import { Button, Card, Flex, Text } from "@mantine/core";
import { Edit2 } from "lucide-react";
import Image from "next/image";

export function ProductCard({ product }: { product: HomeProduct }) {
	return (
		<Card>
			<Card.Section>
				<Image
					src={getLink(product?.image[0]?.image)}
					alt={product.name}
					width={300}
					height={300}
				/>
			</Card.Section>
			<Text mt="md" size="lg" fw={"bold"}>
				{product.name}
			</Text>
			<ProductPrice product={product} />
			<Button leftSection={<Edit2 />} variant="subtle">
				Edit
			</Button>
		</Card>
	);
}

function ProductPrice({ product }: { product: HomeProduct }) {
	const amount = getDiscountAmount(product);
	if (!amount) return <Text>{product.price} EGP</Text>;
	return (
		<Flex gap="sm">
			<Text className="line-through" c={"gray.5"}>
				{product.price}
			</Text>
			<Text>{getDiscountdPrice(product)} EGP</Text>
		</Flex>
	);
}
