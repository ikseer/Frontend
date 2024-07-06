import ProductDetailsForm from "@/components/forms/product-details";
import { productsHooks } from "@ikseer/api/hooks/products";
import type { productDetailsSchema } from "@ikseer/api/services/products";
import type { Product } from "@ikseer/lib/types";
import { Button, Flex, Table, Text, Title } from "@mantine/core";
import { Edit2 } from "lucide-react";
import { useState } from "react";
import type { z } from "zod";
import { revalidateProduct } from "./utils.server";

export function ProductDetails({ product }: { product: Product }) {
	const [isEditing, setIsEditing] = useState(false);
	const update = productsHooks.useUpdate();
	return (
		<>
			<Flex justify={"space-between"} gap="md">
				<Title component="h1">Product details</Title>
				<Button
					variant="default"
					leftSection={<Edit2 />}
					onClick={() => setIsEditing(true)}
				>
					Edit
				</Button>
			</Flex>
			<Text component="h2" size="lg" fw="bold" mt="xl">
				{product.name}
			</Text>
			<Text component="p" mt="sm">
				{product.description}
			</Text>
			<Table mt="xl">
				<Table.Thead>
					<Table.Tr>
						<Table.Th>Attribute</Table.Th>
						<Table.Th>Details</Table.Th>
					</Table.Tr>
				</Table.Thead>
				<Table.Tbody>
					<Table.Tr>
						<Table.Td>
							<Text fw="bold">Short description</Text>
						</Table.Td>
						<Table.Td>
							<Text>{product.short_description}</Text>
						</Table.Td>
					</Table.Tr>
					<Table.Tr>
						<Table.Td>
							<Text fw="bold">Price</Text>
						</Table.Td>
						<Table.Td>
							<Text>{product.price}</Text>
						</Table.Td>
					</Table.Tr>
					<Table.Tr>
						<Table.Td>
							<Text fw="bold">In stock</Text>
						</Table.Td>
						<Table.Td>
							<Text>{product.stock}</Text>
						</Table.Td>
					</Table.Tr>
					<Table.Tr>
						<Table.Td>
							<Text fw="bold">Category</Text>
						</Table.Td>
						<Table.Td>
							<Text>{product.category}</Text>
						</Table.Td>
					</Table.Tr>
					<Table.Tr>
						<Table.Td>
							<Text fw="bold">Form</Text>
						</Table.Td>
						<Table.Td>
							<Text>{product.form}</Text>
						</Table.Td>
					</Table.Tr>
					<Table.Tr>
						<Table.Td>
							<Text fw="bold">Strength</Text>
						</Table.Td>
						<Table.Td>
							<Text>{product.strength}</Text>
						</Table.Td>
					</Table.Tr>
					<Table.Tr>
						<Table.Td>
							<Text fw="bold">Code</Text>
						</Table.Td>
						<Table.Td>
							<Text>{product.code}</Text>
						</Table.Td>
					</Table.Tr>
					<Table.Tr>
						<Table.Td>
							<Text fw="bold">Pharmacy</Text>
						</Table.Td>
						<Table.Td>
							<Text>{product.pharmacy}</Text>
						</Table.Td>
					</Table.Tr>
					<Table.Tr>
						<Table.Td>
							<Text fw="bold">Factory company</Text>
						</Table.Td>
						<Table.Td>
							<Text>{product.factory_company}</Text>
						</Table.Td>
					</Table.Tr>
				</Table.Tbody>
			</Table>
			<ProductDetailsForm
				opened={isEditing}
				initialValues={{
					name: product.name,
					generic_name: product.generic_name,
					short_description: product.short_description,
					description: product.description,
					strength: product.strength,
					price: product.price || 0,
					stock: product.stock,
					pharmacy: product.pharmacy,
					category: product.category,
					form: product.form as z.infer<typeof productDetailsSchema>["form"],
					code: product.code,
					factory_company: product.factory_company,
				}}
				onSuccess={async () => {
					await revalidateProduct(product.id);
					setIsEditing(false);
				}}
				onClose={() => setIsEditing(false)}
				onSubmit={(data) => {
					return update.mutateAsync({ id: product.id, ...data });
				}}
			/>
		</>
	);
}
