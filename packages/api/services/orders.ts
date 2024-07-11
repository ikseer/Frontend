import { PAYMOB_API_KEY, PAYMOB_INTEGRATION_ID } from "@ikseer/lib/constants";
import type { Cart, CartItem, Order } from "@ikseer/lib/types";
import type { AxiosInstance } from "axios";
import { z } from "zod";
import { httpNoAuth } from "../utils/axios-non-auth";
import { CRUD_API } from "../utils/crud-api";

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
	constructor(
		private http: AxiosInstance,

		public orders = new CRUD_API<
			Order,
			Omit<Order, "items"> & { items: CartItem[] },
			OrderCreationData
		>("/orders/orders/", http),

		public cartItems = new CRUD_API<
			CartItem,
			CartItem,
			{
				product: string;
				cart: string;
				quantity: number;
			}
		>("/orders/cart-item/", http),
	) {}

	getCart = async () => {
		return await this.http.get<Cart>("/orders/cart/").then((res) => res.data);
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

export type OrderCreationData = {
	first_name: string;
	last_name: string;
	street: string;
	zip_code: string;
	phone: string;
	country: string;
	city: string;
	email: string;
	payment: string;
	user: string;
};
