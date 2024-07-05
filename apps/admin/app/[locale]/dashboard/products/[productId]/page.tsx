import { Routes } from "@/lib/routes";
import { serverAPI } from "@ikseer/api/utils/api.server";
import { Anchor, Box, Breadcrumbs } from "@mantine/core";
import { ProductPageTabs } from "./_components/product-page-tabs";

export default async function ProductPage({
	params,
}: { params: typeof Routes.productPage.params }) {
	const product = await serverAPI.products.getProductById(params.productId);
	return (
		<Box>
			<Breadcrumbs mb="xl">
				<Anchor href={Routes.dashboard()}>Dashboard</Anchor>
				<Anchor href={Routes.products()}>Products</Anchor>
				<span>{product.name}</span>
			</Breadcrumbs>
			<ProductPageTabs product={product} />
		</Box>
	);
}
