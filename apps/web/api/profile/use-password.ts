import { http } from "@/lib/axios";
import { useMutation } from "@tanstack/react-query";

interface PasswordType {
	old_password: string;
	new_password1: string;
	new_password2: string;
}

const handleUpdatePassword = async (data: PasswordType) => {
	const id = "temp";
	const response = await http.patch(`/accounts/password/change/${id}/`, data);
	return response;
};
export const useUpdatePassword = () => {
	return useMutation({
		mutationFn: handleUpdatePassword,
		onSuccess(data) {
			console.log(data, "success");
		},
		onError(data) {
			console.log(data, "error");
		},
	});
};
