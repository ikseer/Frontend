import type { AxiosInstance } from "axios";
import { AccountsAPI } from "../services/accounts";
import { AI_API } from "../services/ai";
import { OrdersAPI } from "../services/orders";
import { PharmaciesAPI } from "../services/pharmacies";
import { ProductsAPI } from "../services/products";
import { ChatAPI, MessageAPI } from "./../services/chat";

export function getAPI(http: AxiosInstance) {
	return {
		accounts: new AccountsAPI(http),
		products: new ProductsAPI(http),
		orders: new OrdersAPI(http),
		pharmacies: new PharmaciesAPI(http),
		ai: new AI_API(http),
		chat: new ChatAPI(http),
		message: new MessageAPI(http),
	};
}
