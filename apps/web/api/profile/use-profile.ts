import { http } from "@/lib/axios";
import type { Profile } from "@/types";
import { useMutation, useQuery } from "@tanstack/react-query";

// Read

// Update

export const useUpdateProfile = () => {
	return useMutation({
		mutationFn: updateUserProfile,
		onSuccess: () => {
			console.log("Profile Updated From useUpdateProfile");
		},
		onError: (error) => {
			console.log(error);
		},
	});
};

// Delete
const delteProfile = () => {
	const id = "temp";
	const response = http.delete(`accounts/profile/?user_id=${id}`);
	return response;
};

export const useDeleteProfile = () => {
	return useMutation({
		mutationFn: delteProfile,
		onSuccess: () => {
			console.log("Profile Deleted");
		},
		onError: (error) => {
			console.log(error);
		},
	});
};
