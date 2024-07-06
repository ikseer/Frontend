import type {
	DiscountProduct,
	HomeProduct,
	PaginationResult,
	Product,
	ProductCategory,
	ProductCoupon,
	ProductDiscount,
	ProductImage,
} from "@ikseer/lib/types";
import type { AxiosInstance } from "axios";
import { httpNoAuth } from "../utils/axios-non-auth";
import { getSearchParams } from "../utils/get-search-params";
import type { SearchOptions } from "../utils/types";
import { z } from "zod";
import { CRUD_API } from "../utils/crud-api";
import { zFile } from "@ikseer/lib/utils";

export class ProductsAPI {
	images: CRUD_API<ProductImage>;
	coupons: CRUD_API<ProductCoupon, z.infer<typeof couponSchema>>;
	discounts: CRUD_API<ProductDiscount>;
	products: CRUD_API<Product, z.infer<typeof productDetailsSchema>>;
	categories: CRUD_API<ProductCategory, z.infer<typeof categorySchema>>;

	constructor(private http: AxiosInstance) {
		this.images = new CRUD_API("/products/product_image/", http, true);
		this.coupons = new CRUD_API("/products/coupon/", http);
		this.discounts = new CRUD_API("/products/discount/", http);
		this.products = new CRUD_API("/products/product/", http);
		this.categories = new CRUD_API("/products/category/", http);
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
		return await httpNoAuth
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
		return await httpNoAuth
			.delete(`/products/product/${id}/`)
			.then((res) => res.data);
	};
	getWishList = async () => {
		return await this.http
			.get<
				PaginationResult<{
					id: string;
					create_at: string;
					product: string;
					user: string;
				}>
			>("/products/wishlistitem/")
			.then((res) => res.data);
	};

	addToWishList = async ({
		product,
		user,
	}: { product: string; user: string }) => {
		return await this.http
			.post("/products/wishlistitem/", { product, user })
			.then((res) => res.data);
	};

	removeFromWishList = async (product: string) => {
		return await this.http
			.delete(`/products/wishlistitem/${product}`)
			.then((res) => res.data);
	};

	getDiscountedProduct = async () => {
		return await this.http
			.get<PaginationResult<DiscountProduct>>("/products/discount/")
			.then((res) => res.data);
	};
}

export const productDetailsSchema = z.object({
	code: z.string().min(1),
	name: z.string().min(1),
	generic_name: z.string().min(1),
	description: z.string().min(1),
	short_description: z.string().min(1),
	strength: z.string().min(1),
	factory_company: z.string().min(1),
	form: z
		.literal("tablet")
		.or(z.literal("capsule"))
		.or(z.literal("liquid"))
		.or(z.literal("N/A")),
	price: z.number().min(0),
	stock: z.number().min(0),
	category: z.string().uuid(),
	pharmacy: z.string().uuid(),
});

export const couponSchema = z.object({
	discount_type: z.enum(["amount", "percentage"]),
	discount_amount: z.coerce.number().min(0),
	usage_limit: z.coerce.number().min(0).optional().nullable(),
	end_date: z.coerce.date(),
	start_date: z.coerce.date(),
	minimum_purchase_amount: z.coerce.number().min(0).optional().nullable(),
	code: z.string().min(1),
	active: z.boolean(),
});

export const categorySchema = z.object({
	name: z.string().min(1),
	image: zFile(),
});
