import { UserIdCookie } from "@ikseer/lib/cookies.client";
import { toast, useToast } from "@ikseer/ui/src/components/ui/use-toast";
import { useMutation, useQuery } from "@tanstack/react-query";
import { clientAPI } from "../config/api.client";
import { setSession } from "../config/session.client";

// Register
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

export function useOtp({ onSuccess }: { onSuccess?: () => void }) {
	const { toast } = useToast();
	return useMutation({
		mutationFn: clientAPI.auth.otp,
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

// Login
export function useLogin({
	onSuccess,
}: {
	onSuccess?: (data: Awaited<ReturnType<typeof clientAPI.auth.login>>) => void;
} = {}) {
	const { toast } = useToast();
	return useMutation({
		mutationFn: clientAPI.auth.login,
		onSuccess: (data) => {
			onSuccess?.(data);
			toast({
				title: "Login Success",
				variant: "success",
			});
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

// Reset password
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

export function useResetPassword({ onSuccess }: { onSuccess?: () => void }) {
	const { toast } = useToast();
	return useMutation({
		mutationFn: clientAPI.auth.resetPassword,
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

// Change password
export const useChangePassword = () => {
	return useMutation({
		mutationFn: clientAPI.auth.changePassword,
		onSuccess(data) {
			console.log(data, "success");
		},
		onError(data) {
			console.log(data, "error");
		},
	});
};

export function useGetPatient() {
	const userId = UserIdCookie.get();
	console.log(userId, "user id from api cakll");
	return useQuery({
		queryKey: ["patient"],
		queryFn: () => clientAPI.auth.getPatient(userId),
	});
}

export function useGetDoctor() {
	const userId = UserIdCookie.get();
	return useQuery({
		queryKey: ["doctor"],
		queryFn: () => clientAPI.auth.getDoctor(userId),
	});
}

export function useUpdatePatient() {
	const userId = UserIdCookie.get();
	return useMutation({
		mutationFn: () => clientAPI.auth.updatePatient(userId as string),
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

export function useUpdateDoctor() {
	const docterId = UserIdCookie.get();
	return useMutation({
		mutationFn: () => clientAPI.auth.updateDoctor(docterId as string),
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

export function useDeletePatient({ onSuccess }: { onSuccess?: () => void }) {
	const { toast } = useToast();
	const userId = UserIdCookie.get();

	return useMutation({
		mutationFn: () => clientAPI.auth.deletePatient(userId as string),
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

export function useDeleteDoctor({ onSuccess }: { onSuccess?: () => void }) {
	const userId = UserIdCookie.get();

	return useMutation({
		mutationFn: () => clientAPI.auth.deleteDoctor(userId as string),
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

export function useGetPatientImage() {
	const userId = UserIdCookie.get();

	return useQuery({
		queryKey: ["my-image"],
		queryFn: () => clientAPI.auth.getPatientImage(userId as string),
	});
}

export function useGetDoctorImage() {
	const userId = UserIdCookie.get();
	return useQuery({
		queryKey: ["my-image"],
		queryFn: () => clientAPI.auth.getPatientImage(userId as string),
	});
}

// Update image
export function useUpdatePatientImage() {
	const { toast } = useToast();
	return useMutation({
		mutationFn: clientAPI.auth.updatePatientImage,
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
}

export const useUpdateDoctorImage = () => {
	const { toast } = useToast();
	return useMutation({
		mutationFn: clientAPI.auth.updateDoctorImage,
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
