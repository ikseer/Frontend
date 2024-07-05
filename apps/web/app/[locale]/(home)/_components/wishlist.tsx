"use client";
import {
	useAddToWishList,
	useGetWishList,
	useRemoveFromWishList,
} from "@ikseer/api/hooks/products";
import { UserIdCookie } from "@ikseer/lib/cookies.client";
import { cn } from "@ikseer/lib/utils";
import { Button } from "@ikseer/ui/components/ui/button";
import { Heart } from "lucide-react";

export default function WishList({
	id,
	isWishList,
}: { id: string; isWishList: boolean }) {
	const addToWishlist = useAddToWishList();
	const userId = UserIdCookie.get();
	const removeFromWishList = useRemoveFromWishList();
	const { data } = useGetWishList();
	const isWishListed = data?.data.filter((item) => item.product === id);

	return (
		<Button
			className="bg-zinc-500 hover:bg-zinc-400"
			onClick={() => {
				if (isWishList) removeFromWishList.mutate(id);
				else addToWishlist.mutate({ product: id, user: userId as string });
			}}
		>
			<Heart className={cn(isWishList ? "text-red-500" : "text-zinc-50")} />
		</Button>
	);
}
