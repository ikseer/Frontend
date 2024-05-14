import nonAuthRequest from "@/api/nonAuthRequest";
import { useMutation } from "@tanstack/react-query";

interface PinNumberType {
	otp: string;
}

const confirmPinCode = async (data: PinNumberType) => {
	const response = await nonAuthRequest.post("/accounts/verify-otp/", data);
	return response;
};

export const useConfirmPinCode = () => {
	return useMutation({
		mutationFn: confirmPinCode,
	});
};
