import { useInfiniteQuery, useQuery } from "@tanstack/react-query";
import { clientAPI } from "../config/api.client";

export const useProductById = (id: string) => {
	return useQuery({
		queryKey: ["product-get"],
		queryFn: () => clientAPI.products.getProductById(id),
	});
};

export const useProducts = () => {
	return useInfiniteQuery({
		queryKey: ["product-get"],
		queryFn: clientAPI.products.getProducts,
		initialPageParam: 1,
		getNextPageParam: (lastPage, allPages) => {
			return lastPage.next ? allPages.length + 1 : undefined;
		},
	});
};
