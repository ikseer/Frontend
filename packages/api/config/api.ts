import type { AxiosInstance } from "axios";
import { AccountsAPI } from "../services/accounts";
import { ProductsAPI } from "../services/product";

export function getAPI(http: AxiosInstance) {
	return {
		accounts: new AccountsAPI(http),
		products: new ProductsAPI(http),
	};
}
