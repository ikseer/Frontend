import { PAYMOB_API_KEY, PAYMOB_INTEGRATION_ID } from "@ikseer/lib/constants";
import type { Cart, CreateCartItem, EditCartItem } from "@ikseer/lib/types";
import type { AxiosInstance } from "axios";
import { z } from "zod";
import { httpNoAuth } from "../utils/axios-non-auth";

export const paymentSchema = z.object({
	first_name: z.string(),
	last_name: z.string(),
	country: z.string(),
	city: z.string(),
	street: z.string(),
	phone: z.string(),
	email: z.string().email(),
	payment: z.string(),
	zip_code: z.string(),
});

export class OrdersAPI {
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
	createOrder = async (
		data: z.infer<typeof paymentSchema> & { user: string },
	) => {
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
					first_name: string;
					last_name: string;
					street: string;
					zip_code: string;
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
		const data = await httpNoAuth
			.post<{ token: string }>("https://accept.paymob.com/api/auth/tokens", {
				api_key: PAYMOB_API_KEY,
			})
			.then((res) => res.data);
		return await httpNoAuth
			.post<{ token: string }>(
				"https://accept.paymob.com/api/acceptance/payment_keys",
				{
					auth_token: data.token,
					amount_cents: amountInCents.toString(),
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
