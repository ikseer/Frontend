import type { CreateCartItem } from "@ikseer/lib/types";
import { useToast } from "@ikseer/ui/components/ui/use-toast";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { clientAPI } from "../utils/api.client";

export function useGetCart() {
	return useQuery({
		queryKey: ["get-cart"],
		queryFn: () => clientAPI.orders.getCart(),
	});
}

export function useCreateCartItem(data: Omit<CreateCartItem, "quantity">) {
	const queryClient = useQueryClient();
	const { toast } = useToast();
	return useMutation({
		mutationKey: ["create-cart-item", data.product, data.cart],
		mutationFn: clientAPI.orders.createCartItem,
		onSuccess: () => {
			queryClient.invalidateQueries({ queryKey: ["get-cart"] });
			toast({
				title: "Cart item created",
				variant: "success",
			});
		},
		onError: () => {
			toast({
				title: "Can't create cart item",
				variant: "error",
			});
		},
	});
}

// TODO: handle the error message data to display correct error message when add or delete item.
export function useEditCartItem(data: Omit<CreateCartItem, "quantity">) {
	const { toast } = useToast();
	const queryClient = useQueryClient();

	return useMutation({
		mutationKey: ["edit-cart-item", data.product, data.cart],
		mutationFn: clientAPI.orders.editCartItem,
		onSuccess: () => {
			queryClient.invalidateQueries({ queryKey: ["get-cart"] });
			toast({
				title: "Item added to cart",
				variant: "success",
			});
		},
		onError: () => {
			toast({
				title: "Can't add item to cart",
				variant: "error",
			});
		},
	});
}

export function useDeleteOrderItem(id: string) {
	const { toast } = useToast();
	const queryClient = useQueryClient();

	return useMutation({
		mutationKey: ["delete-cart-item", id],
		mutationFn: () => clientAPI.orders.deleteCartItem(id),
		onSuccess: () => {
			queryClient.invalidateQueries({ queryKey: ["get-cart"] });
			toast({
				title: "Item deleted",
				variant: "success",
			});
		},
		onError: () => {
			toast({
				title: "Can't delete item",
				variant: "error",
			});
		},
	});
}

export default function useCreateOrder(onSuccess: (id: string) => void) {
	const { toast } = useToast();
	return useMutation({
		mutationKey: ["create-order"],
		mutationFn: clientAPI.orders.createOrder,
		onSuccess: (data) => {
			onSuccess?.(data.id);
			toast({
				title: "Order created",
				variant: "success",
			});
		},
		onError: () => {
			toast({
				title: "Can't create order",
				variant: "error",
			});
		},
	});
}

export function useGetActiveOrders() {
	return useQuery({
		queryKey: ["get-active-orders"],
		queryFn: () => clientAPI.orders.getActiveOrders(),
	});
}

export function useGetPaymobToken(
	onSuccess?: (data: { token: string }) => void,
) {
	return useMutation({
		mutationKey: ["get-first-paymob-access-token"],
		mutationFn: clientAPI.orders.getPaymobToken,
		onSuccess: (data) => {
			onSuccess?.(data);
		},
	});
}

export function useCreatePaymobOrderId(
	onSuccess?: (data: { paymob_order_id: string; amount_cents: string }) => void,
) {
	return useMutation({
		mutationKey: ["create-paymob-order-id"],
		mutationFn: clientAPI.orders.createPaymobOrderId,
		onSuccess: (data) => {
			onSuccess?.(data);
		},
	});
}
