"use client";
import { http } from "@/lib/axios";
import type { Profile } from "@/types";
import { useMutation, useQuery } from "@tanstack/react-query";

// Read
const profileGetFunction = async () => {
	const id = "temp";
	const response = await http.get("/accounts/profile/", {
		params: {
			id: id,
		},
	});
	return response.data;
};

export const useGetProfile = (enabled: boolean) => {
	return useQuery({
		queryKey: ["profile-get"],
		queryFn: profileGetFunction,
		enabled,
	});
};

// Update
const updateUserProfile = async (data: Profile) => {
	const newObject = Object.fromEntries(
		Object.entries(data).filter(([key]) => key !== "image"),
	);
	const id = "temp";
	const request = await http.patch(`/accounts/profile/${id}/`, newObject);
	return request;
};

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
