import { http } from "@/lib/axios";
import { useMutation } from "@tanstack/react-query";

interface PinNumberType {
	otp: string;
}

const confirmPinCode = async (data: PinNumberType) => {
	const response = await http.post("/accounts/verify-otp/", data);
	return response;
};

export const useConfirmPinCode = () => {
	return useMutation({
		mutationFn: confirmPinCode,
	});
};
