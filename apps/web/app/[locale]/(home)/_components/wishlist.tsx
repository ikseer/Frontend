"use client";
import {
	useAddToWishList,
	useRemoveFromWishList,
} from "@ikseer/api/hooks/products";
import { cn } from "@ikseer/lib/utils";
import { Button } from "@ikseer/ui/components/ui/button";
import { Heart } from "lucide-react";

export default function WishList({
	id,
	isWishList,
}: { id: string; isWishList: boolean }) {
	const addToWishlist = useAddToWishList();
	const removeFromWishList = useRemoveFromWishList();
	return (
		<Button
			className="bg-zinc-500 hover:bg-zinc-400"
			onClick={() => {
				if (isWishList) removeFromWishList.mutate(id);
				else addToWishlist.mutate(id);
			}}
		>
			<Heart className={cn(isWishList ? "text-red-500" : "text-zinc-50")} />
		</Button>
	);
}
