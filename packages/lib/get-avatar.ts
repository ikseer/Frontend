import { BACKEND_URL } from "./constants";
import type { Profile } from "./types";

export function getAvatarLink(user: Profile) {
	const linkRegex = /^https?:\/\//;
	return user.profilePicture
		? linkRegex.test(user.profilePicture)
			? user.profilePicture
			: `${BACKEND_URL}/files/download/${user.profilePicture}`
		: `https://api.dicebear.com/8.x/shapes/png?seed=user-${user.userId}`;
}
