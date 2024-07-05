import { BACKEND_URL } from "@ikseer/lib/constants";
import axios from "axios";

export const httpNoAuth = axios.create({
	baseURL: BACKEND_URL,
});
