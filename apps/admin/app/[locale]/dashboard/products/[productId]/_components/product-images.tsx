import "@mantine/dropzone/styles.css";

import type { Product } from "@ikseer/lib/types";
import { Box, Stack, Title } from "@mantine/core";
import type { ReactNode } from "react";
import { FilesDropzone } from "./files-dropzone";
import { Files } from "lucide-react";
import { ImageCard } from "./image-card";

export default function ProductImages({ product }: { product: Product }) {
	const images = product.images;

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
					{images.map((img) => (
						<ImageCard image={img} key={img.id} />
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
