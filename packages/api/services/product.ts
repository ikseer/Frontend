import type { ProductsListPage } from "@ikseer/lib/types";
import type { AxiosInstance } from "axios";

export class ProductsAPI {
	constructor(private http: AxiosInstance) {}

	getProductById = async (id: string) => {
		return await this.http
			.get(`/products/product/${id}`)
			.then((res) => res.data);
	};

	// TODO: use a general searching options and utilities to map to the shape that the backend understands
	// just like the hospital project or TekView.
	getProducts = async (params: {
		pageParam: number;
		limit: number;
		top_sales?: boolean;
	}) => {
		return await this.http
			.get<ProductsListPage>("/products/home/", { params: params })
			.then((res) => res.data);
	};
}
