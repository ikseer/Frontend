import type { AxiosInstance } from "axios";
import { AccountsAPI } from "../services/accounts";
import { OrderAPI } from "../services/orders";
import { ProductsAPI } from "../services/products";

export function getAPI(http: AxiosInstance) {
	return {
		accounts: new AccountsAPI(http),
		products: new ProductsAPI(http),
		order: new OrderAPI(http),
	};
}
