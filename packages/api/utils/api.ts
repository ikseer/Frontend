import type { AxiosInstance } from "axios";
import { AccountsAPI } from "../services/accounts";
import { OrdersAPI } from "../services/orders";
import { ProductsAPI } from "../services/products";
import { PharmaciesAPI } from "services/pharmacies";

export function getAPI(http: AxiosInstance) {
	return {
		accounts: new AccountsAPI(http),
		products: new ProductsAPI(http),
		orders: new OrdersAPI(http),
		pharmacies: new PharmaciesAPI(http),
	};
}
