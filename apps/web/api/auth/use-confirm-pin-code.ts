import { http } from "@/lib/axios";
import { useMutation } from "@tanstack/react-query";
import type { PinNumberProps } from "./types";

const confirmPinCode = async (data: PinNumberProps) => {
	const response = await http.post("/accounts/verify-otp/", data);
	return response;
};

export const useConfirmPinCode = () => {
	return useMutation({
		mutationFn: confirmPinCode,
	});
};
