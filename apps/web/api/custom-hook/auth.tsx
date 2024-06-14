import { useMutation } from "@tanstack/react-query";
import { clientAPI } from "../config/api.client";

export function useRegister({ onSuccess }: { onSuccess: () => void }) {
	return useMutation({
		mutationFn: clientAPI.auth.register,
		onSuccess: () => {
			onSuccess();
		},
	});
}

export function useOtp() {
	return useMutation({
		mutationFn: clientAPI.auth.otp,
		onSuccess: () => {},
	});
}

export function usePhone({ onSuccess }: { onSuccess: () => void }) {
	return useMutation({
		mutationFn: clientAPI.auth.phone,
		onSuccess: () => {
			onSuccess();
		},
	});
}

export function useLogin({ onSuccess }: { onSuccess: () => void }) {
	return useMutation({
		mutationFn: clientAPI.auth.login,
		onSuccess: () => {
			onSuccess();
		},
	});
}

export function useLogout() {
	return useMutation({
		mutationFn: clientAPI.auth.logout,
	});
}

export function useResetPassword({ onSuccess }: { onSuccess: () => void }) {
	return useMutation({
		mutationFn: clientAPI.auth.resetPassword,
		onSuccess: () => {
			onSuccess();
		},
	});
}

export function useDeleteMe({ onSuccess }: { onSuccess: () => void }) {
	return useMutation({
		mutationFn: clientAPI.auth.deleteMe,
		onSuccess: () => {
			onSuccess();
		},
	});
}
