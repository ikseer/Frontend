import type { AxiosInstance } from "axios";
import { Auth } from "../api-classes/auth";

export function getAPI(http: AxiosInstance) {
	return {
		auth: new Auth(http),
	};
}
