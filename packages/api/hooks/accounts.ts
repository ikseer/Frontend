import { ProfileIdCookie, UserTypeCookie } from "@ikseer/lib/cookies.client";
import { toast, useToast } from "@ikseer/ui/components/ui/use-toast";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { clientAPI } from "../utils/api.client";
import { setSession } from "../utils/session.client";

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
				profile_id,
			} = data;
			console.info(
				refreshToken,
				accessToken,
				data,
				user_type,
				profile_id,
				"login returnded data",
			);
			setSession({
				accessToken,
				refreshToken,
				profileId: profile_id,
				userType: user_type,
				userId: id,
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
				title: "Password Change success",
				variant: "success",
			});
		},
		onError: () => {
			toast({
				title: "Can't Change password",
				variant: "error",
			});
		},
	});
}

export function useGetMe() {
	const profileId = ProfileIdCookie.get();
	console.log(profileId, "profileId");
	const userType = UserTypeCookie.get();
	if (!profileId || !userType) return;
	if (userType === "doctor") return useGetDoctor(profileId);
	if (userType === "patient") return useGetPatient(profileId);
}
export function useDeleteMe({
	onSuccess,
	method,
}: { onSuccess?: () => void; method: "hard" | "soft" }) {
	const userId = ProfileIdCookie.get();
	const userType = UserTypeCookie.get();
	if (!userId || !userType) return;
	if (userType === "doctor") return useDeleteDoctor({ onSuccess, method });
	if (userType === "patient")
		return useDeletePatient(userId, { onSuccess }, method);
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

export function useUpdatePatient({
	onSuccess,
}: { onSuccess?: () => void } = {}) {
	const { toast } = useToast();
	const queryClient = useQueryClient();
	return useMutation({
		mutationFn: clientAPI.accounts.updatePatient,
		onSuccess() {
			onSuccess?.();
			queryClient.invalidateQueries({
				queryKey: ["patient", ProfileIdCookie.get()],
			});
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
	method: "hard" | "soft" = "soft",
) {
	const { toast } = useToast();
	return useMutation({
		mutationFn: () => clientAPI.accounts.deletePatient(id, method),
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
	method,
}: { onSuccess?: () => void; method?: "hard" | "soft" } = {}) {
	const userId = ProfileIdCookie.get();

	return useMutation({
		mutationFn: () => clientAPI.accounts.deleteDoctor(userId as string, method),
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
