import type { AxiosInstance } from "axios";
import { AuthAPI } from "../services/auth";
import { ProductsAPI } from "../services/product";

export function getAPI(http: AxiosInstance) {
	return {
		auth: new AuthAPI(http),
		products: new ProductsAPI(http),
	};
}
