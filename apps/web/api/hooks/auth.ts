import { useToast } from "@ikseer/ui/src/components/ui/use-toast";
import { useMutation } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import { clientAPI } from "../config/api.client";
import { setSession } from "../config/session.client";

export function useCheckUserName() {
	return useMutation({
		mutationFn: clientAPI.auth.checkUserName,
	});
}

export function useCheckEmail() {
	return useMutation({
		mutationFn: clientAPI.auth.checkEmail,
	});
}

export function useRegister({ onSuccess }: { onSuccess: () => void }) {
	const { toast } = useToast();
	return useMutation({
		mutationFn: clientAPI.auth.register,
		onSuccess: () => {
			toast({
				title: "Account created",
				description: "We've created your account for you.",
				variant: "success",
			});
			onSuccess();
		},
		onError: () => {
			toast({
				title: "Can't create account",
				description: "Please try again later.",
				variant: "error",
			});
		},
	});
}

export function useOtp() {
	const { toast } = useToast();
	return useMutation({
		mutationFn: clientAPI.auth.otp,
		onSuccess: () => {
			toast({
				title: "OTP Verified",
				description: "We've created your OTP for you.",
				variant: "success",
			});
		},
		onError: (error) => {
			toast({
				title: "Can't Verify OTP",
				description: "Please try again later.",
				variant: "error",
			});
		},
	});
}

export function usePhone({ onSuccess }: { onSuccess: () => void }) {
	const { toast } = useToast();
	return useMutation({
		mutationFn: clientAPI.auth.phone,
		onSuccess: () => {
			onSuccess();
			toast({
				title: "Phone number verified",
				variant: "success",
			});
		},
		onError: () => {
			toast({
				title: "Can't verify phone number",
				variant: "error",
			});
		},
	});
}

export function useLogin({ onSuccess }: { onSuccess?: () => void }) {
	const { toast } = useToast();
	const router = useRouter();
	return useMutation({
		mutationFn: clientAPI.auth.login,
		onSuccess: (data) => {
			onSuccess?.();
			toast({
				title: "Login Success",
				variant: "success",
			});
			const { access, token } = data;
			console.info(access, token);
			setSession({ accessToken: access, refreshToken: token });
			router.push("/");
		},

		onError: (error) => {
			toast({
				title: "Can't login",
				variant: "error",
			});
			console.info(error);
		},
	});
}

export function useLogout() {
	const { toast } = useToast();
	return useMutation({
		mutationFn: clientAPI.auth.logout,
		onSuccess: () => {
			toast({
				title: "Logout Success",
				variant: "success",
			});
		},
	});
}

export function useResetPassword({ onSuccess }: { onSuccess: () => void }) {
	const { toast } = useToast();
	return useMutation({
		mutationFn: clientAPI.auth.resetPassword,
		onSuccess: () => {
			onSuccess();
			toast({
				title: "Password reset success",
				variant: "success",
			});
		},
		onError: () => {
			toast({
				title: "Can't reset password",
				variant: "error",
			});
		},
	});
}

export function useDeleteMe({ onSuccess }: { onSuccess: () => void }) {
	const { toast } = useToast();
	return useMutation({
		mutationFn: clientAPI.auth.deleteMe,
		onSuccess: () => {
			onSuccess();
			toast({
				title: "Account deleted",
				variant: "success",
			});
		},
		onError: () => {
			toast({
				title: "Can't delete account",
				variant: "error",
			});
		},
	});
}

export const useUpdatePassword = () => {
	return useMutation({
		mutationFn: clientAPI.auth.updatePassword,
		onSuccess(data) {
			console.log(data, "success");
		},
		onError(data) {
			console.log(data, "error");
		},
	});
};
