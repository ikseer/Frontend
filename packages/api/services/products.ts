import type { HomeProduct, PaginationResult, Product } from "@ikseer/lib/types";
import type { AxiosInstance } from "axios";
import { httpNoAuth } from "../config/axios-non-auth";
import { getSearchParams } from "../config/get-search-params";
import type { SearchOptions } from "../config/types";
export class ProductsAPI {
	constructor(private http: AxiosInstance) {}

	getProductById = async (id: string) => {
		return await this.http
			.get<Product>(`/products/product/${id}`)
			.then((res) => res.data);
	};

	getProducts = async (options?: SearchOptions) => {
		const params = getSearchParams(options);
		return await httpNoAuth
			.get<PaginationResult<HomeProduct>>("/products/home/", {
				params: params,
			})
			.then((res) => res.data);
	};

	deleteProduct = async (id: string) => {
		return await httpNoAuth
			.delete(`/products/product/${id}`)
			.then((res) => res.data);
	};
}
