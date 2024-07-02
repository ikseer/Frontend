import type { HomeProduct, PaginationResult, Product } from "@ikseer/lib/types";
import type { AxiosInstance } from "axios";
import { getSearchParams } from "../config/get-search-params";
import type { SearchOptions } from "../config/types";
import { z } from "zod";

export class ProductsAPI {
	constructor(private http: AxiosInstance) {}

	// ------------------------------------------------
	// Products
	// ------------------------------------------------

	createProduct = async (product: z.infer<typeof productDetailsSchema>) => {
		return await this.http
			.post<Product>("/products/product/", product)
			.then((res) => res.data);
	};

	getProductById = async (id: string) => {
		return await this.http
			.get<Product>(`/products/product/${id}`)
			.then((res) => res.data);
	};

	getProducts = async (options?: SearchOptions) => {
		const params = getSearchParams(options);
		return await this.http
			.get<PaginationResult<HomeProduct>>("/products/home/", {
				params: params,
			})
			.then((res) => res.data);
	};

	updateProduct = async ({
		id,
		...data
	}: z.infer<typeof productDetailsSchema> & { id: string }) => {
		return await this.http
			.patch<Product>(`/products/product/${id}/`, data)
			.then((res) => res.data);
	};

	deleteProduct = async (id: string) => {
		return await this.http
			.delete(`/products/product/${id}/`)
			.then((res) => res.data);
	};

	// ------------------------------------------------
	// Images
	// ------------------------------------------------
}

export const productDetailsSchema = z.object({
	name: z.string().min(1),
	description: z.string().min(1),
	price: z.number().min(0),
	stock: z.number().min(0),
	images: z
		.array(z.object({ id: z.string(), url: z.string() }))
		.min(1)
		.max(5),
});
