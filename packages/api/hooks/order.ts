import { useQuery } from "@tanstack/react-query";
import { clientAPI } from "../config/api.client";

export function useGetCart() {
	return useQuery({
		queryKey: ["get-cart"],
		queryFn: () => clientAPI.order.getCart(),
	});
}
