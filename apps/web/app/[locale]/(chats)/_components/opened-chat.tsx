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
import type { Chat, Message as MessageType } from "@ikseer/lib/types";
import { getLink } from "@ikseer/lib/utils";
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
		{},
		40,
	);
	console.log(currentMsgs, "msg");
	const userType = UserTypeCookie.get();
	let myImage = "";
	let otherImage = "";

	if (userType === "doctor") {
		myImage =
			userChat?.filter((chat) => chat?.id === chatId)?.[0]?.doctor_profile
				?.image ||
			getLink(userChat?.[0]?.doctor_profile?.id as string) ||
			"https://i.suar.me/oqmy7/m";
		otherImage =
			userChat?.filter((chat) => chat?.id === chatId)?.[0]?.patient_profile
				?.image ||
			getLink(userChat?.[0]?.doctor_profile?.id as string) ||
			"https://i.suar.me/oqmy7/m";
	} else {
		myImage =
			userChat?.filter((chat) => chat?.id === chatId)?.[0]?.patient_profile
				?.image ||
			getLink(userChat?.[0]?.doctor_profile?.id as string) ||
			"https://i.suar.me/oqmy7/m";
		otherImage =
			userChat?.filter((chat) => chat?.id === chatId)?.[0]?.doctor_profile
				?.image ||
			getLink(userChat?.[0]?.doctor_profile?.id as string) ||
			"https://i.suar.me/oqmy7/m";
	}

	const craeteMssg = MessageHooks.useCreate();
	const userId = UserIdCookie.get();
	const [messageInputValue, setMessageInputValue] = useState("");
	// @ts-ignore
	const userMsg: MessageType[] = currentMsgs?.data?.results;
	console.log(userMsg, "currentMsgs", userId, "userId");

	return (
		<ChatContainer>
			<ConversationHeader className="pt-2">
				<ConversationHeader.Back />
				<Avatar src={otherImage} name="Zoe" />
				<ConversationHeader.Content userName="Zoe" />
				<ConversationHeader.Actions>
					<VoiceCallButton />
					<VideoCallButton />
					<InfoButton />
				</ConversationHeader.Actions>
			</ConversationHeader>
			<MessageList
			// typingIndicator={<TypingIndicator content="Zoe is typing" />}
			>
				{Array.isArray(userMsg) &&
					userMsg?.map((ele) => {
						return (
							<Message
								key={ele.id}
								model={{
									message: `${ele.text}`,
									sentTime: "15 mins ago",
									sender: "Zoe",
									direction: `${userId === ele.sender.id ? "incoming" : "outgoing"}`,
									position: "single",
								}}
							>
								avatarSpacer
								<Avatar
									src={`${userId === ele.sender.id ? otherImage : myImage}`}
									name="Zoe"
								/>
							</Message>
						);
					})}

				{/*<Message*/}
				{/*	model={{*/}
				{/*		message: "Hello my friend",*/}
				{/*		sentTime: "15 mins ago",*/}
				{/*		sender: "Patrik",*/}
				{/*		direction: "outgoing",*/}
				{/*		position: "last",*/}
				{/*	}}*/}
				{/*>*/}
				{/*	avatarSpacer*/}
				{/*</Message>*/}

				{/*<Message*/}
				{/*	model={{*/}
				{/*		message: "Hello my friend",*/}
				{/*		sentTime: "15 mins ago",*/}
				{/*		sender: "Zoe",*/}
				{/*		direction: "incoming",*/}
				{/*		position: "first",*/}
				{/*	}}*/}
				{/*	avatarSpacer*/}
				{/*/>*/}
				{/*<Message*/}
				{/*	model={{*/}
				{/*		message: "Hello my friend",*/}
				{/*		sentTime: "15 mins ago",*/}
				{/*		sender: "Zoe",*/}
				{/*		direction: "incoming",*/}
				{/*		position: "last",*/}
				{/*	}}*/}
				{/*>*/}
				{/*	<Avatar src="https://i.suar.me/oqmy7/m" name="Zoe" />*/}
				{/*</Message>*/}
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
