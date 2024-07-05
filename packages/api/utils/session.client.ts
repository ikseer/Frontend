import "client-only";
import {
	AccessTokenCookie,
	ProfileIdCookie,
	RefreshTokenCookie,
	UserIdCookie,
	UserTypeCookie,
} from "@ikseer/lib/cookies.client";
import type { UserType } from "@ikseer/lib/types";
import { useMemo } from "react";

export interface SessionInfo {
	accessToken: string;
	refreshToken: string;
	userId: string;
	userType: UserType;
	profileId: string | null;
}

export function setSession(
	session: {
		accessToken: string;
		refreshToken: string;
		userId: string | null;
		userType: UserType | null;
		profileId: string | null;
	} | null,
) {
	if (!session) {
		AccessTokenCookie.delete();
		RefreshTokenCookie.delete();
		ProfileIdCookie.delete();
		UserTypeCookie.delete();
		UserIdCookie.delete();
		return;
	}
	const { accessToken, refreshToken, userId, userType, profileId } = session;
	AccessTokenCookie.set(accessToken, "/");
	RefreshTokenCookie.set(refreshToken, "/");
	if (userId) UserIdCookie.set(userId, "/");
	if (userType) UserTypeCookie.set(userType, "/");
	if (profileId) ProfileIdCookie.set(profileId, "/");
}

export function useCurrentUser() {
	const accessToken = AccessTokenCookie.get();
	const refreshToken = RefreshTokenCookie.get();
	const userId = ProfileIdCookie.get();
	const userType = UserTypeCookie.get();
	const profileId = ProfileIdCookie.get();

	const session = useMemo<SessionInfo | null>(() => {
		if (!accessToken || !refreshToken || !userId || !userType || !profileId)
			return null;
		try {
			return {
				accessToken,
				refreshToken,
				userId,
				userType,
				profileId,
			};
		} catch (e) {
			AccessTokenCookie.delete();
			RefreshTokenCookie.delete();
			console.error(e);
			console.error("invalid access token", accessToken);
		}
		return null;
	}, [accessToken, refreshToken, userType, userId, profileId]);

	return session;
}
