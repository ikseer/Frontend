import { isAxiosError } from "axios";

export function getErrorMsg(error: unknown) {
	if (isAxiosError(error)) {
		if (error.response) {
			return error.response.data;
		}
		if (error.request) {
			return error.request;
		}
		return error.message;
	}
	return "something went wrong";
}
