"use client";

import authRequest from "@/api/authRequest";
import Auth from "@/modules/Auth/Auth";
import { useMutation } from "@tanstack/react-query";
import { useRouter } from "next/navigation";

const deleteAccount = async () => {
	const auth = new Auth();
	const { id } = auth.getUserAuth();
	const response = await authRequest.delete(`/accounts/profile/${id}`);
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
