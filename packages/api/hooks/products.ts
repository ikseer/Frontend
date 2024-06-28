import { useInfiniteQuery, useQuery } from "@tanstack/react-query";
import { clientAPI } from "../config/api.client";

export const useInfiniteProducts = (params: {
	pageParam: number;
	limit: number;
	top_sales?: boolean;
}) => {
	return useInfiniteQuery({
		queryKey: ["product-get"],
		queryFn: () => clientAPI.products.getProducts(params),
		initialPageParam: 1,
		getNextPageParam: (lastPage, allPages) => {
			return lastPage.next ? allPages.length + 1 : undefined;
		},
	});
};

export const useProductById = (id: string) => {
	return useQuery({
		queryKey: ["product-get", id],
		queryFn: () => clientAPI.products.getProductById(id),
	});
};
