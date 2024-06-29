"use client";

import { Button } from "@ikseer/ui/src/components/ui/button";
import { LuTrash2 } from "react-icons/lu";
export default function RemoveProduct({ productId }: { productId: number }) {
	const handleRemoveProduct = () => {
		console.log(productId);
	};

	return (
		<Button onClick={handleRemoveProduct}>
			<LuTrash2 />
		</Button>
	);
}
