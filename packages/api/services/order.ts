import type { AxiosInstance } from "axios";
export class OrderAPI {
	constructor(private http: AxiosInstance) {}

	getCart() {
		return this.http.get("orders/cart/").then((res) => res.data);
	}
}
