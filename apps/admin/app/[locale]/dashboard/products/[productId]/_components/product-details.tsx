import type { Product } from "@ikseer/lib/types";
import { Button, Flex, Table, Text, Title } from "@mantine/core";
import { Edit2 } from "lucide-react";

export function ProductDetails({ product }: { product: Product }) {
	return (
		<>
			<Flex justify={"space-between"} gap="md">
				<Title component="h1">Product details</Title>
				<Button
					variant="default"
					leftSection={<Edit2 />}
					onClick={() => alert("not implemented yet")}
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
		</>
	);
}
