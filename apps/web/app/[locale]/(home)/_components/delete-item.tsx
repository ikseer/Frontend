import { useDeleteOrderItem } from "@ikseer/api/hooks/orders";
import { Button } from "@ikseer/ui/components/ui/button";
import { Trash } from "lucide-react";

export default function DeleteItemById({ cartItemId }: { cartItemId: string }) {
	const deleteCartItem = useDeleteOrderItem(cartItemId);
	return (
		<Button variant="danger" iconOnly onClick={() => deleteCartItem.mutate()}>
			<Trash />
		</Button>
	);
}
