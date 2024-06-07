import { http } from "@/lib/axios";
import { useMutation } from "@tanstack/react-query";

// Update
const updateImage = async (data: Blob) => {
	const id = "temp";
	const request = await http.patchForm(`/accounts/profile/${id}/`, data);
	return request;
};

export const useUpdateProfileImage = () => {
	return useMutation({
		mutationFn: updateImage,
		onSuccess(data) {
			console.log(data, "success");
		},
		onError(data) {
			console.log(data, "error");
		},
	});
};

// Delete
const deleteImage = async () => {
	const id = "temp";
	const request = await http.delete(`/accounts/profile/${id}/`);
	return request;
};
export const useDeleteProfileImage = () => {
	useMutation({
		mutationFn: deleteImage,
	});
};
