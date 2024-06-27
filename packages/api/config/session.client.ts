import "client-only";
import {
	AccessTokenCookie,
	RefreshTokenCookie,
	UserIdCookie,
	UserTypeCookie,
} from "@ikseer/lib/cookies.client";
import { jwtDecode } from "jwt-decode";
import { useMemo } from "react";
import { z } from "zod";

export interface SessionInfo {
	accessToken: string;
	refreshToken: string;
	userId: string;
	userType: "ADMIN" | "EMPLOYEE";
}

export function setSession(
	session: {
		accessToken: string;
		refreshToken: string;
		userId: string | null;
		userType: "patient" | "doctor" | null;
	} | null,
) {
	if (!session) {
		AccessTokenCookie.delete();
		RefreshTokenCookie.delete();
		return;
	}
	const { accessToken, refreshToken, userId, userType } = session;
	AccessTokenCookie.set(accessToken, "/");
	RefreshTokenCookie.set(refreshToken, "/");
	if (userId) UserIdCookie.set(userId, "/");
	if (userType) UserTypeCookie.set(userType, "/");
}

export function useCurrentUser() {
	const accessToken = AccessTokenCookie.get();
	const refreshToken = RefreshTokenCookie.get();

	const session = useMemo<SessionInfo | null>(() => {
		if (!accessToken || !refreshToken) return null;
		try {
			const decoded = jwtDecode(accessToken);
			const data = z
				.object({
					id: z.string().uuid(),
					user_type: z.enum(["ADMIN", "EMPLOYEE"]),
				})
				.parse(decoded);
			return {
				accessToken,
				refreshToken,
				userId: data.id,
				userType: data.user_type,
			};
		} catch (e) {
			AccessTokenCookie.delete();
			RefreshTokenCookie.delete();
			console.error(e);
			console.error("invalid access token", accessToken);
		}
		return null;
	}, [accessToken, refreshToken]);

	return session;
}
