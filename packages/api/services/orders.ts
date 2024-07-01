import type { Cart, CreateCartItem, EditCartItem } from "@ikseer/lib/types";
import type { AxiosInstance } from "axios";

export class OrderAPI {
	constructor(private http: AxiosInstance) {}

	getCart = async () => {
		return await this.http.get<Cart>("/orders/cart/").then((res) => res.data);
	};

	createCartItem = async (data: CreateCartItem) => {
		return await this.http
			.post("/orders/cart-item/", data)
			.then((res) => res.data);
	};

	editCartItem = async (data: EditCartItem) => {
		return await this.http
			.put(`/orders/cart-item/${data.cartItemId}/`, data)
			.then((res) => res.data);
	};
}
