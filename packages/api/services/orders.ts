import { PAYMOB_API_KEY, PAYMOB_INTEGRATION_ID } from "@ikseer/lib/constants";
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
	deleteCartItem = async (id: string) => {
		return await this.http
			.delete(`/orders/cart-item/${id}/`)
			.then((res) => res.data);
	};
	createOrder = async (data: {
		owner: string;
		location: string;
		phone: string;
		user: string;
	}) => {
		return await this.http
			.post<{ id: string }>("/orders/orders/", data)
			.then((res) => res.data);
	};

	getActiveOrders = async () => {
		return await this.http
			.get<{
				counts: number;
				next: string;
				previous: string;
				results: {
					owner: string;
					location: string;
					phone: string;
					user: string;
					status: string;
					total_price: string;
					order_items: {
						id: string;
						quantity: string;
						product: string;
						order: string;
					}[];
					created_at: string;
					updated_at: string;
				}[];
			}>("/orders/orders/")
			.then((res) => res.data);
	};

	createPaymobOrderId = async (order: string) => {
		console.log(order, "order from services");
		return await this.http
			.post<{ paymob_order_id: string; amount_cents: string }>(
				"/orders/paymob/",
				{ order },
			)
			.then((res) => res.data);
	};

	getPaymobToken = async ({
		orderId,
		amountInCents,
	}: { orderId: string; amountInCents: string }) => {
		const { token } = await this.http
			.post<{ token: string }>("https://accept.paymob.com/api/auth/tokens", {
				api_key: PAYMOB_API_KEY,
			})
			.then((res) => res.data);
		console.log(token, "token order", orderId);
		return await this.http
			.post<{ token: string }>(
				"https://accept.paymob.com/api/acceptance/payment_keys",
				{
					auth_token: token,
					amount_cents: amountInCents,
					expiration: 3600,
					order_id: orderId,
					billing_data: {
						apartment: "803",
						email: "claudette09@exa.com",
						floor: "42",
						first_name: "Clifford",
						street: "Ethan Land",
						building: "8028",
						phone_number: "+86(8)9135210487",
						shipping_method: "PKG",
						postal_code: "01898",
						city: "Jaskolskiburgh",
						country: "CR",
						last_name: "Nicolas",
						state: "Utah",
					},
					currency: "EGP",
					integration_id: PAYMOB_INTEGRATION_ID,
				},
			)
			.then((res) => res.data);
	};
}
