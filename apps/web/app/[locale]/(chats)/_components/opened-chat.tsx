import {
	Avatar,
	ChatContainer,
	ConversationHeader,
	InfoButton,
	Message,
	MessageInput,
	MessageList,
	VideoCallButton,
	VoiceCallButton,
} from "@chatscope/chat-ui-kit-react";
import { MessageHooks } from "@ikseer/api/hooks/chat";
import { UserIdCookie, UserTypeCookie } from "@ikseer/lib/cookies.client";
import type {
	Chat,
	Doctor,
	Message as MessageType,
	Patient,
} from "@ikseer/lib/types";
import { getAvatarLink } from "@ikseer/lib/utils";
import { useState } from "react";
export default function CurrentOpenedChat({
	chatId,
	userChat,
}: { chatId: string; userChat: Chat[] }) {
	const currentMsgs = MessageHooks.useList(
		{
			pagination: {
				pageSize: Number.MAX_SAFE_INTEGER,
				pageIndex: 0,
			},
			filters: [
				{
					id: "conversation",
					value: chatId,
				},
			],
		},
		//@ts-ignore
		{},
		900,
	);
	const userType = UserTypeCookie.get();
	let me: Patient | Doctor;
	let him: Patient | Doctor;
	if (userType === "doctor") {
		me = userChat?.filter((chat) => chat?.id === chatId)?.[0]?.doctor_profile;
		him = userChat?.filter((chat) => chat?.id === chatId)?.[0]?.patient_profile;
	} else {
		me = userChat?.filter((chat) => chat?.id === chatId)?.[0]?.patient_profile;

		him = userChat?.filter((chat) => chat?.id === chatId)?.[0]?.doctor_profile;
	}
	const myImage = me?.image ? me.image : getAvatarLink(me);
	const himImage = him?.image ? him?.image : getAvatarLink(him);

	const craeteMssg = MessageHooks.useCreate();
	const userId = UserIdCookie.get();
	const [messageInputValue, setMessageInputValue] = useState("");
	// @ts-ignore
	const userMsg: MessageType[] = currentMsgs?.data?.results;

	return (
		<ChatContainer>
			<ConversationHeader className="pt-2">
				<ConversationHeader.Back />
				<Avatar src={himImage} name={`${him?.first_name} ${him?.last_name}`} />
				<ConversationHeader.Content
					userName={`${him?.first_name} ${him?.last_name}`}
				/>
				<ConversationHeader.Actions>
					<VoiceCallButton />
					<VideoCallButton />
					<InfoButton />
				</ConversationHeader.Actions>
			</ConversationHeader>
			<MessageList>
				{Array.isArray(userMsg) &&
					userMsg?.map((ele) => {
						return (
							<Message
								key={ele.id}
								model={{
									message: `${ele.text}`,
									sentTime: "15 mins ago",
									sender: "Zoe",
									direction: `${userId === ele.sender.id ? "outgoing" : "incoming"}`,
									position: "single",
								}}
							>
								avatarSpacer
								<Avatar
									src={`${userId === ele.sender.id ? myImage : himImage}`}
									name="Zoe"
								/>
							</Message>
						);
					})}
			</MessageList>
			<MessageInput
				placeholder="Type message here"
				value={messageInputValue}
				onChange={(val) => setMessageInputValue(val)}
				onSend={() => {
					craeteMssg.mutate({
						text: messageInputValue,
						conversation: chatId,
					});
					setMessageInputValue("");
				}}
			/>
		</ChatContainer>
	);
}
