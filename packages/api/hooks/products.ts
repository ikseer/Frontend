import { useInfiniteQuery, useMutation, useQuery } from "@tanstack/react-query";
import { clientAPI } from "../utils/api.client";
import type { SearchOptions } from "../utils/types";
import { createCRUDHooks } from "../utils/crud-hooks";
import { useToast } from "@ikseer/ui/components/ui/use-toast";

export const imagesHooks = createCRUDHooks("images", clientAPI.products.images);

export const couponsHooks = createCRUDHooks(
	"coupons",
	clientAPI.products.coupons,
);

export const discountsHooks = createCRUDHooks(
	"discounts",
	clientAPI.products.discounts,
);

export const useInfiniteProducts = (options?: SearchOptions) => {
	return useInfiniteQuery({
		queryKey: ["product-get", options],
		queryFn: ({ pageParam }) =>
			clientAPI.products.getProducts({
				...options,
				pagination: {
					...options?.pagination,
					pageIndex: pageParam,
				},
			}),
		initialPageParam: 0,
		getNextPageParam: (lastPage, allPages) => {
			return lastPage.next ? allPages.length : undefined;
		},
	});
};

export const useProductById = (id: string) => {
	return useQuery({
		queryKey: ["product-get", id],
		queryFn: () => clientAPI.products.getProductById(id),
	});
};

// NOTE: this not used and not tested
export const useDeleteProductById = (id: string) => {
	const { toast } = useToast();
	return useMutation({
		mutationKey: ["product-delete", id],
		mutationFn: () => clientAPI.products.deleteProduct(id),
		onSuccess: () => {
			toast({
				title: "Product deleted",
				variant: "success",
			});
		},
		onError: () => {
			toast({
				title: "Can't delete product",
				variant: "error",
			});
		},
	});
};
