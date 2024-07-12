import {
	Avatar,
	Conversation,
	ConversationList,
} from "@chatscope/chat-ui-kit-react";
import { chatHooks } from "@ikseer/api/hooks/chat";
import { ProfileIdCookie, UserTypeCookie } from "@ikseer/lib/cookies.client";
import type { Patient } from "@ikseer/lib/types";
import { Button } from "@ikseer/ui/components/ui/button";

export function NewChatSidebar({ noChatsYet }: { noChatsYet: Patient[] }) {
	const profileId = ProfileIdCookie.get();
	const userType = UserTypeCookie.get();
	const createChat = chatHooks.useCreate();

	return (
		<ConversationList>
			{noChatsYet?.map((chat) => (
				<section
					className="flex items-center justify-between p-2"
					key={chat?.id}
				>
					<Conversation
						name={`${chat?.first_name} ${chat?.last_name}`}
						info="Click to start chat"
					>
						<Avatar
							src={chat?.image || "https://i.suar.me/oqmy7/m"}
							name={chat?.first_name}
							status="available"
						/>
					</Conversation>
					<Button
						variant="submit"
						disabled={createChat.isPending}
						onClick={() => {
							createChat.mutate({
								// @ts-ignore
								patient: userType === "patient" ? profileId : chat?.id ?? "",
								// @ts-ignore
								doctor: userType === "doctor" ? profileId : chat?.id ?? "",
							});
						}}
					>
						Chat
					</Button>
				</section>
			))}
		</ConversationList>
	);
}
