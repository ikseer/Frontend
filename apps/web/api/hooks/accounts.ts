import { toast, useToast } from "@ikseer/ui/src/components/ui/use-toast";
import { useMutation, useQueries, useQuery } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import { clientAPI } from "../config/api.client";
import { UserIdCookie, UserTypeCookie } from "../config/cookies.client";
import { setSession } from "../config/session.client";
import { setServerSession } from "../config/session.server";

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

// Login
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

// Logout
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

// Read Me
export function useGetMe() {
	const userId = UserIdCookie.get();
	const userType = UserTypeCookie.get();
	if (userType === "PATIENT") {
		return useQuery({
			queryKey: ["me"],
			queryFn: () => clientAPI.auth.getPatient(userId as string),
		});
	}
	if (userType === "DOCTOR") {
		return useQuery({
			queryKey: ["me"],
			queryFn: () => clientAPI.auth.getDoctor(userId as string),
		});
	}
}

// Update Me
export function useUpdateMe() {
	const userId = UserIdCookie.get();
	const userType = UserTypeCookie.get();
	const { toast } = useToast();
	if (userType === "PATIENT") {
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

	if (userType === "DOCTOR") {
		return useMutation({
			mutationFn: () => clientAPI.auth.updateDoctor(userId as string),
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
	const userId = UserIdCookie.get();
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
