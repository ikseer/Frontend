"use client";

import "@mantine/dropzone/styles.css";

import { clientAPI } from "@ikseer/api/utils/api.client";
import type { Product } from "@ikseer/lib/types";
import { Box, Stack, Title } from "@mantine/core";
import { useMutation } from "@tanstack/react-query";
import { Files } from "lucide-react";
import type { ReactNode } from "react";
import { FilesDropzone } from "./files-dropzone";
import { ImageCard } from "./image-card";
import { revalidateProducts } from "./utils.server";

export default function ProductImages({ product }: { product: Product }) {
	const images = product.images.toSorted((a, b) => b.priority - a.priority);

	const updateOrder = useMutation({
		mutationFn: async ({ i, j }: { i: number; j: number }) => {
			for (const [k, img] of images.entries()) {
				if (k === i) {
					// change to j
					await clientAPI.products.images.update({
						id: img.id,
						priority: images.length - 1 - j,
					});
				} else if (k === j) {
					// change to i
					await clientAPI.products.images.update({
						id: img.id,
						priority: images.length - 1 - i,
					});
				} else if (images.length - 1 - img.priority !== k) {
					await clientAPI.products.images.update({
						id: img.id,
						priority: images.length - 1 - k, // because images are reversed
					});
				}
			}
		},
		onSuccess: () => {
			revalidateProducts();
		},
	});

	return (
		<Box>
			<Title component={"h2"} mb="md">
				Product images
			</Title>
			{/**I tried to call onDrop here give me error
			 *useMutation Render more than one time Error:
			 * */}
			<FilesDropzone product={product} />

			{!images || images.length === 0 ? (
				<AttachmentNotFound>
					<Files />
					<span>No attachments found!</span>
				</AttachmentNotFound>
			) : (
				<Stack gap="lg" mt="md">
					{images.map((img, i) => (
						<ImageCard
							isLoading={updateOrder.isPending}
							image={img}
							key={img.id}
							index={i}
							isLast={i === images.length - 1}
							onSwap={(i, j) => updateOrder.mutate({ i, j })}
						/>
					))}
				</Stack>
			)}
		</Box>
	);
}

function AttachmentNotFound({ children }: { children: ReactNode }) {
	return (
		<div className="border border-slate-200 dark:border-slate-700 p-6 bg-gray-500/10 rounded  text-xl md:py-12 mt-5 flex justify-center items-center">
			{children}
		</div>
	);
}
