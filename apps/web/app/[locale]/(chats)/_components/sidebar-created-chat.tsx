import {
	Avatar,
	Conversation,
	ConversationList,
} from "@chatscope/chat-ui-kit-react";

export function CreatedChatSidebar() {
	return (
		<ConversationList>
			<Conversation
				name="Lilly"
				lastSenderName="Lilly"
				info="Yes i can do it for you"
				style={{ justifyContent: "start" }}
			>
				<Avatar
					src="https://i.suar.me/oqmy7/m"
					name="Lilly"
					status="available"
				/>
			</Conversation>

			<Conversation
				name="Joe"
				lastSenderName="Joe"
				info="Yes i can do it for you"
			>
				<Avatar src="https://i.suar.me/oqmy7/m" name="Joe" status="dnd" />
			</Conversation>

			<Conversation
				name="Emily"
				lastSenderName="Emily"
				info="Yes i can do it for you"
				unreadCnt={3}
			>
				<Avatar
					src="https://i.suar.me/oqmy7/m"
					name="Emily"
					status="available"
				/>
			</Conversation>

			<Conversation
				name="Kai"
				lastSenderName="Kai"
				info="Yes i can do it for you"
				unreadDot
			>
				<Avatar
					src="https://i.suar.me/oqmy7/m"
					name="Kai"
					status="unavailable"
				/>
			</Conversation>

			<Conversation
				name="Akane"
				lastSenderName="Akane"
				info="Yes i can do it for you"
			>
				<Avatar src="https://i.suar.me/oqmy7/m" name="Akane" status="eager" />
			</Conversation>

			<Conversation
				name="Eliot"
				lastSenderName="Eliot"
				info="Yes i can do it for you"
				onClick={() => {
					console.log("must move to this convers");
				}}
			>
				<Avatar src="https://i.suar.me/oqmy7/m" name="Eliot" status="away" />
			</Conversation>

			<Conversation
				name="Zoe"
				lastSenderName="Zoe"
				info="Yes i can do it for you"
				active
			>
				<Avatar src="https://i.suar.me/oqmy7/m" name="Zoe" status="dnd" />
			</Conversation>

			<Conversation
				name="Patrik"
				lastSenderName="Patrik"
				info="Yes i can do it for you"
			>
				<Avatar
					src="https://i.suar.me/oqmy7/m"
					name="Patrik"
					status="invisible"
				/>
			</Conversation>
		</ConversationList>
	);
}
