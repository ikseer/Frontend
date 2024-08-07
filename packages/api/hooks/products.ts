import { useToast } from "@ikseer/ui/components/ui/use-toast";
import {
	useInfiniteQuery,
	useMutation,
	useQuery,
	useQueryClient,
} from "@tanstack/react-query";
import { clientAPI } from "../utils/api.client";
import { createCRUDHooks } from "../utils/crud-hooks";
import type { SearchOptions } from "../utils/types";

export const productsHooks = createCRUDHooks(
	"products",
	clientAPI.products.products,
);

export const imagesHooks = createCRUDHooks("images", clientAPI.products.images);

export const categoriesHooks = createCRUDHooks(
	"categories",
	clientAPI.products.categories,
);

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

export function useGetWishList() {
	return useQuery({
		queryKey: ["get-wishlist"],
		queryFn: clientAPI.products.getWishList,
	});
}

export function useAddToWishList() {
	const { toast } = useToast();
	const queryClient = useQueryClient();
	return useMutation({
		mutationFn: clientAPI.products.addToWishList,
		onSuccess: () => {
			queryClient.invalidateQueries({
				queryKey: ["get-wishlist"],
			});
			toast({
				variant: "success",
				title: "added to wishlist",
			});
		},
		onError: () => {
			toast({
				variant: "error",
				title: "can't add to wishlist",
			});
		},
	});
}

export function useRemoveFromWishList() {
	const { toast } = useToast();
	const queryClient = useQueryClient();

	return useMutation({
		mutationFn: clientAPI.products.removeFromWishList,
		onSuccess: () => {
			queryClient.invalidateQueries({
				queryKey: ["get-wishlist"],
			});
			toast({
				variant: "success",
				title: "removed from wishlist",
			});
		},
		onError: () => {
			toast({
				variant: "error",
				title: "can't remove from wishlist",
			});
		},
	});
}

export function useGetDiscountedProducts() {
	return useQuery({
		queryKey: ["discounted-product"],
		queryFn: clientAPI.products.getDiscountedProduct,
	});
}
