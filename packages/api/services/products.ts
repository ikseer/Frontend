import type {
	HomeProduct,
	PaginationResult,
	Product,
	ProductCoupon,
	ProductDiscount,
	ProductImage,
} from "@ikseer/lib/types";
import type { AxiosInstance } from "axios";
import { getSearchParams } from "../utils/get-search-params";
import type { SearchOptions } from "../utils/types";
import { z } from "zod";
import { CRUD_API } from "../utils/crud-api";

export class ProductsAPI {
	images: CRUD_API<ProductImage>;
	coupons: CRUD_API<ProductCoupon>;
	discounts: CRUD_API<ProductDiscount>;

	constructor(private http: AxiosInstance) {
		this.images = new CRUD_API("/products/product_image/", http, true);
		this.coupons = new CRUD_API("/products/coupon/", http);
		this.discounts = new CRUD_API("/products/discount/", http);
	}

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
