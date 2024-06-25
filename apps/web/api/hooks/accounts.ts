import { toast, useToast } from "@ikseer/ui/src/components/ui/use-toast";
import { useMutation, useQueries, useQuery } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import { clientAPI } from "../config/api.client";
import { UserIdCookie } from "../config/cookies.client";
import { setSession } from "../config/session.client";
import { setServerSession } from "../config/session.server";

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
		onSuccess: (data) => {
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

export function useOtp({ onSuccess }: { onSuccess?: () => void }) {
	const { toast } = useToast();
	return useMutation({
		mutationFn: clientAPI.auth.otp,
		onSuccess: (data) => {
			const {
				refresh: refreshToken,
				access: accessToken,
				user: { pk },
			} = data;
			console.info(refreshToken, accessToken, data, "login returnded data");
			setSession({ accessToken, refreshToken, userId: pk });
			onSuccess?.();
			toast({
				title: "OTP Verified",
				description: "We've created your OTP for you.",
				variant: "success",
			});
		},
		onError: () => {
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

export function useResendOtp({ onSuccess }: { onSuccess?: () => void }) {
	const { toast } = useToast();
	return useMutation({
		mutationFn: clientAPI.auth.resendOtp,
		onSuccess: () => {
			onSuccess?.();
			toast({
				title: "OTP Resent",
				variant: "success",
			});
		},
		onError: () => {
			toast({
				title: "Can't resend OTP",
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
			const {
				access,
				token,
				user: { pk },
			} = data;
			console.log(access, token, data.user.pk, data, "login returnded data");
			setSession({ accessToken: access, refreshToken: token, userId: pk });

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
	const router = useRouter();
	return useMutation({
		mutationFn: clientAPI.auth.logout,
		onSuccess: () => {
			toast({
				title: "Logout Success",
				variant: "success",
			});
			router.push("/login");
		},
		onError: () => {
			toast({
				title: "Can't logout",
				variant: "error",
			});
		},
	});
}

export function useChangePassword({ onSuccess }: { onSuccess?: () => void }) {
	const { toast } = useToast();
	return useMutation({
		mutationFn: clientAPI.auth.changePassword,
		onSuccess: () => {
			onSuccess?.();
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

export function useGetMe() {
	const userId = UserIdCookie.get();
	return useQuery({
		queryKey: ["me"],
		queryFn: () => clientAPI.auth.getPatient(userId as string),
	});
}

export function useUpdateMe() {
	const { toast } = useToast();
	return useMutation({
		mutationFn: clientAPI.auth.updatePatient,
		onSuccess() {
			toast({
				title: "Profile updated",
				variant: "success",
			});
		},
		onError() {
			toast({
				title: "Can't update profile",
				variant: "error",
			});
		},
	});
}

export function useDeleteMe({ onSuccess }: { onSuccess?: () => void }) {
	const { toast } = useToast();
	return useMutation({
		mutationFn: clientAPI.auth.deletePatient,
		onSuccess: () => {
			onSuccess?.();
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

export const useGetMyImage = () => {
	return useQuery({
		queryKey: ["my-image"],
		queryFn: clientAPI.auth.getMyImage,
	});
};

export const useUpdateMyImage = () => {
	const { toast } = useToast();
	return useMutation({
		mutationFn: clientAPI.auth.updateMyImage,
		onSuccess() {
			toast({
				title: "Profile image updated",
				variant: "success",
			});
		},
		onError() {
			toast({
				title: "Can't update profile image",
				variant: "error",
			});
		},
	});
};