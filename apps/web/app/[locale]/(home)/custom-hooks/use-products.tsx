import { http } from "@/lib/axios";
import { useInfiniteQuery } from "@tanstack/react-query";

const getProducts = async ({ pageParam = 1 }) => {
	const response = await http.get("/products/product/", {
		params: {
			page: pageParam,
			limit: 3,
		},
	});
	return response.data;
};

export const useGetProducts = () => {
	return useInfiniteQuery({
		queryKey: ["product-get"],
		queryFn: getProducts,
		initialPageParam: 1,
		getNextPageParam: (lastPage, allPages) => {
			return lastPage.next ? allPages.length + 1 : undefined;
		},
	});
};
