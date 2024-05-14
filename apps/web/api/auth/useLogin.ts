import { http } from "@/lib/axios";
import { useMutation } from "@tanstack/react-query";
import { useRouter } from "next/navigation";

const login = async (data: { username: string; password: string }) => {
	const response = await http.post("/accounts/login/", data);
	return response;
};

export const useLogin = () => {
	const route = useRouter();
	return useMutation({
		mutationFn: login,
		onSuccess: (data) => {
			localStorage.setItem("use", JSON.stringify(data.data.user));
			route.push("/");
		},
	});
};
