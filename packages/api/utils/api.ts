import type { AxiosInstance } from "axios";
import { AccountsAPI } from "../services/accounts";
import { OrdersAPI } from "../services/orders";
import { PharmaciesAPI } from "../services/pharmacies";
import { ProductsAPI } from "../services/products";
import { AI_API } from "../services/ai";

export function getAPI(http: AxiosInstance) {
	return {
		accounts: new AccountsAPI(http),
		products: new ProductsAPI(http),
		orders: new OrdersAPI(http),
		pharmacies: new PharmaciesAPI(http),
		ai: new AI_API(http),
	};
}
