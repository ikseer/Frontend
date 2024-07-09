import {
	Avatar,
	Conversation,
	ConversationList,
} from "@chatscope/chat-ui-kit-react";
import { UserTypeCookie } from "@ikseer/lib/cookies.client";
import type { Chat } from "@ikseer/lib/types";
import { getAvatarLink } from "@ikseer/lib/utils";

export function CreatedChatSidebar({
	chatedWithMe,
	setChatId,
}: { chatedWithMe: Chat[]; setChatId: (id: string) => void }) {
	const userType = UserTypeCookie.get();
	return (
		<ConversationList>
			{chatedWithMe?.map((chat) => {
				const him =
					userType === "doctor" ? chat.patient_profile : chat.doctor_profile;

				return (
					<Conversation
						key={chat?.id}
						name={`${him?.first_name} ${him?.last_name}`}
						style={{ justifyContent: "start" }}
						info="Click to view chat"
						onClick={() => setChatId(chat?.id)}
					>
						<Avatar
							src={him?.image ? him?.image : getAvatarLink(him)}
							name={him?.first_name}
							status="available"
						/>
					</Conversation>
				);
			})}
		</ConversationList>
	);
}
