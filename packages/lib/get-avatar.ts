import { BACKEND_URL } from "./constants";
import type { User } from "./types";

export function getAvatarLink(user: User) {
	const linkRegex = /^https?:\/\//;
	return user.image
		? linkRegex.test(user.image)
			? user.image
			: `${BACKEND_URL}/files/download/${user.image}`
		: `https://api.dicebear.com/8.x/shapes/png?seed=user-${user.id}`;
}
