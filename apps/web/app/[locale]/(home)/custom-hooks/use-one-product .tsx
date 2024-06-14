import { http } from "@/lib/axios";
import { useQuery } from "@tanstack/react-query";

const getOneProducts = async (id: string) => {
	console.log(id, "from use hook");
	const response = await http.get(`/products/product/${id}`);
	return response.data;
};

export const useGetOneProduct = (id: string) => {
	return useQuery({
		queryKey: ["product-get"],
		queryFn: () => getOneProducts(id),
	});
};
