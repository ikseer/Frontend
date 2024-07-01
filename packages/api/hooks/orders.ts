import type { CreateCartItem } from "@ikseer/lib/types";
import { useToast } from "@ikseer/ui/components/ui/use-toast";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { clientAPI } from "../config/api.client";

export function useGetCart() {
	return useQuery({
		queryKey: ["get-cart"],
		queryFn: () => clientAPI.order.getCart(),
	});
}

export function useCreateCartItem(data: Omit<CreateCartItem, "quantity">) {
	const queryClient = useQueryClient();
	const { toast } = useToast();
	return useMutation({
		mutationKey: ["create-cart-item", data.product, data.cart],
		mutationFn: clientAPI.order.createCartItem,
		onSuccess: () => {
			queryClient.invalidateQueries({ queryKey: ["get-cart"] });
			toast({
				title: "Cart item created",
				variant: "success",
			});
		},
		onError: (e) => {
			console.log(e);
			toast({
				title: "Can't create cart item",
				variant: "error",
			});
		},
	});
}

// TODo handle the error message data to display correct error message when add or delete item.
export function useEditCartItem(data: Omit<CreateCartItem, "quantity">) {
	const { toast } = useToast();
	const queryClient = useQueryClient();

	return useMutation({
		mutationKey: ["edit-cart-item", data.product, data.cart],
		mutationFn: clientAPI.order.EditCartItem,
		onSuccess: () => {
			queryClient.invalidateQueries({ queryKey: ["get-cart"] });
			toast({
				title: "Item added to cart",
				variant: "success",
			});
		},
		onError: (e) => {
			console.log(e);
			toast({
				title: "Can't add item to cart",
				variant: "error",
			});
		},
	});
}
