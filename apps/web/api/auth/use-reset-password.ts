import { http } from "@/lib/axios";
import { useRouter } from "@/navigation";

import { useMutation } from "@tanstack/react-query";

interface ResetPasswordType {
	email: string;
}

const resetPassword = async (data: ResetPasswordType) => {
	const response = await http.post("/accounts/password/reset/", data);
	return response;
};

export const useResetPassword = () => {
	const route = useRouter();
	return useMutation({
		mutationFn: resetPassword,
		onSuccess: () => {
			route.push("/forgot-password");
		},
		onError: (error) => {
			console.log(error);
		},
	});
};
