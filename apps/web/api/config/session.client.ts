import "client-only";
import { jwtDecode } from "jwt-decode";
import { useMemo } from "react";
import { z } from "zod";
import {
	AccessTokenCookie,
	ImpersonateAccessTokenCookie,
	ImpersonateRefreshTokenCookie,
	RefreshTokenCookie,
} from "./cookies.client";

export interface SessionInfo {
	accessToken: string;
	refreshToken: string;
	userId: string;
	userType: "ADMIN" | "EMPLOYEE";
}

export function setSession(
	session: { accessToken: string; refreshToken: string } | null,
) {
	if (!session) {
		AccessTokenCookie.delete();
		RefreshTokenCookie.delete();
		return;
	}
	const { accessToken, refreshToken } = session;
	AccessTokenCookie.set(accessToken, "/");
	RefreshTokenCookie.set(refreshToken, "/");
}

export function setImpersonateSession(
	session: { accessToken: string; refreshToken: string } | null,
) {
	if (!session) {
		ImpersonateAccessTokenCookie.delete();
		ImpersonateRefreshTokenCookie.delete();
		return;
	}
	const { accessToken, refreshToken } = session;
	ImpersonateAccessTokenCookie.set(accessToken, "/");
	ImpersonateRefreshTokenCookie.set(refreshToken, "/");
}

export function unimpersonate() {
	const accessToken = ImpersonateAccessTokenCookie.get() as string;
	const refreshToken = ImpersonateRefreshTokenCookie.get() as string;
	setImpersonateSession(null);
	setSession({ accessToken, refreshToken });
}

export function isImpersonated() {
	return (
		!!ImpersonateAccessTokenCookie.get() &&
		!!ImpersonateRefreshTokenCookie.get()
	);
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
