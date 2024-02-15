import nonAuthRequest from "@/api/nonAuthRequest";
import { useInfiniteQuery } from "@tanstack/react-query";


// get Product
const getProduct = async ({pageParam = 1}) => {
    const response = await nonAuthRequest.get("/products/product/", {
        params: {
            page: pageParam,
            limit: 10,
        },
    });
    return response.data;
}

export const useGetProduct = () => {
    return useInfiniteQuery({
        queryKey: ["product-get"],
        queryFn: getProduct,
        initialPageParam: 1,
        getNextPageParam: (lastPage, allPages) => {
            const nextPage = lastPage.length > 0 ? allPages.length + 1 : undefined;
            return nextPage
        }
    });
};