import { useDeleteOrderItem } from "@ikseer/api/hooks/orders";
import { Button } from "@ikseer/ui/components/ui/button";
import { Trash } from "lucide-react";

export default function DeleteItemById({ cartItemId }: { cartItemId: string }) {
	const deleteCartItem = useDeleteOrderItem();
	return (
		<Button
			variant="danger"
			iconOnly
			isLoading={deleteCartItem.isPending}
			onClick={() => deleteCartItem.mutate({ id: cartItemId })}
		>
			<Trash />
		</Button>
	);
}
