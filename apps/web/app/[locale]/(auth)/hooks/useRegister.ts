import authRequest from "@/api/authRequest";
import nonAuthRequest from "@/api/nonAuthRequest";
import { useRegisterContext } from "@/app/[locale]/(auth)/register/context/RegisterContext";
import useAuthStore from "@/store/auth/useAuth";
import { useMutation } from "@tanstack/react-query";
import { useRouter } from "next/navigation";

import type {
	PhoneNumberType,
	PinNumberType,
	RegisterType,
} from "./useRegisterTypes";

const register = async (data: RegisterType) => {
	const newData = {
		...data,
		password1: data.password,
		password2: data.password,
		email: data.user_email,
	};
	const response = await nonAuthRequest.post("/accounts/register/", newData);
	return response;
};

export const useRegister = () => {
	const { triggerFunction } = useRegisterContext();

	return useMutation({
		mutationFn: register,

		onSuccess: () => {
			triggerFunction.current?.click();
		},
		onError: (error) => {
			console.log(error);
		},
	});
};

// Register second step
let userObject = {
	id: "",
	accessToken: "",
	refreshToken: "",
};

const confirmEmail = async (data: PinNumberType) => {
	const response = await nonAuthRequest.post(
		"/accounts/verify-email-otp/",
		data,
	);
	return response;
};

export const usePinCode = () => {
	const { triggerFunction } = useRegisterContext();
	const { setUserInfo } = useAuthStore();
	return useMutation({
		mutationFn: confirmEmail,
		onSuccess: (data) => {
			triggerFunction.current?.click();
			userObject = {
				id: data.data.user.pk,
				accessToken: data.data.access,
				refreshToken: data.data.refresh,
			};
			setUserInfo(userObject);
		},
		onError: (error) => {
			console.log(error);
		},
	});
};

// Register third step
const sendPhoneNumber = async (data: PhoneNumberType) => {
	const response = await authRequest.post("/accounts/phone-register/", data);
	return response;
};

export const usePhoneNumber = () => {
	const route = useRouter();
	return useMutation({
		mutationFn: sendPhoneNumber,
		onSuccess: () => {
			route.push("/");
		},
		onError: (error) => {
			console.log(error);
		},
	});
};