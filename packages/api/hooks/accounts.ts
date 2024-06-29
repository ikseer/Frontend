import { UserIdCookie, UserTypeCookie } from "@ikseer/lib/cookies.client";
import { toast, useToast } from "@ikseer/ui/src/components/ui/use-toast";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { clientAPI } from "../config/api.client";
import { setSession } from "../config/session.client";

// --------------------------
// Authentication
// --------------------------

export function useCheckUserName() {
	return useMutation({
		mutationFn: clientAPI.accounts.checkUserName,
	});
}

export function useCheckEmail() {
	return useMutation({
		mutationFn: clientAPI.accounts.checkEmail,
	});
}

export function useRegister({ onSuccess }: { onSuccess: () => void }) {
	const { toast } = useToast();
	return useMutation({
		mutationFn: clientAPI.accounts.register,
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

export function useOtp({ onSuccess }: { onSuccess?: () => void }) {
	const { toast } = useToast();
	return useMutation({
		mutationFn: clientAPI.accounts.otp,
		onSuccess: (data) => {
			const {
				refresh: refreshToken,
				access: accessToken,
				user: { id, user_type },
			} = data;
			console.info(
				refreshToken,
				accessToken,
				data,
				user_type,
				"login returnded data",
			);
			setSession({
				accessToken,
				refreshToken,
				userId: id,
				userType: user_type,
			});
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
		mutationFn: clientAPI.accounts.phone,
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

export function useLogin({
	onSuccess,
}: {
	onSuccess?: (
		data: Awaited<ReturnType<typeof clientAPI.accounts.login>>,
	) => void;
} = {}) {
	return useMutation({
		mutationFn: clientAPI.accounts.login,
		onSuccess: (data) => {
			onSuccess?.(data);
		},
		onError: (error) => {
			console.error(error);
		},
	});
}

export function useResendOtp({ onSuccess }: { onSuccess?: () => void }) {
	const { toast } = useToast();
	return useMutation({
		mutationFn: clientAPI.accounts.resendOtp,
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

export function useResetPassword({ onSuccess }: { onSuccess?: () => void }) {
	const { toast } = useToast();
	return useMutation({
		mutationFn: clientAPI.accounts.resetPassword,
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

export const useChangePassword = () => {
	return useMutation({
		mutationFn: clientAPI.accounts.changePassword,
	});
};

export function useGetMe() {
	const userId = UserIdCookie.get();
	const userType = UserTypeCookie.get();
	if (!userId || !userType) return;
	if (userType === "doctor") return useGetDoctor(userId);
	if (userType === "patient") return useGetPatient(userId);
}

// --------------------------
// Patient
// --------------------------

export function useGetPatient(id: string) {
	return useQuery({
		queryKey: ["patient", id],
		queryFn: () => clientAPI.accounts.getPatient(id),
	});
}

export function useUpdatePatient() {
	const userId = UserIdCookie.get();
	return useMutation({
		mutationFn: () => clientAPI.accounts.updatePatient(userId as string),
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

export function useDeletePatient(
	id: string,
	{ onSuccess }: { onSuccess?: () => void } = {},
) {
	const { toast } = useToast();
	return useMutation({
		mutationFn: () => clientAPI.accounts.deletePatient(id),
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

// --------------------------
// Doctor
// --------------------------

export function useGetDoctor(id: string) {
	return useQuery({
		queryKey: ["doctor", id],
		queryFn: () => clientAPI.accounts.getDoctor(id),
	});
}

export function useCreateDoctor({
	onSuccess,
}: {
	onSuccess?: (
		data: Awaited<ReturnType<typeof clientAPI.accounts.createDoctor>>,
	) => void;
} = {}) {
	const queryClient = useQueryClient();
	return useMutation({
		mutationFn: clientAPI.accounts.createDoctor,
		onSuccess(data) {
			onSuccess?.(data);
			queryClient.invalidateQueries({
				queryKey: ["deleted-doctors"],
			});
			queryClient.invalidateQueries({
				queryKey: ["doctors"],
			});
		},
	});
}

export function useUpdateDoctor() {
	return useMutation({
		mutationFn: clientAPI.accounts.updateDoctor,
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

export function useDeleteDoctor({
	onSuccess,
}: { onSuccess?: () => void } = {}) {
	const userId = UserIdCookie.get();

	return useMutation({
		mutationFn: () => clientAPI.accounts.deleteDoctor(userId as string),
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
