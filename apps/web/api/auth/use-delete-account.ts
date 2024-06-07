import { http } from "@/lib/axios";
import { useMutation } from "@tanstack/react-query";
import { useRouter } from "next/navigation";

const deleteAccount = async () => {
	const { id } = { id: 1 };
	const response = await http.delete(`/accounts/profile/${id}`);
	return response.data;
};

export const useDeleteAccount = () => {
	const route = useRouter();
	return useMutation({
		mutationFn: deleteAccount,
		onSuccess: () => {
			route.push("/");
		},
		onError: (error) => {
			console.log("Delete Account Error", error);
		},
	});
};
