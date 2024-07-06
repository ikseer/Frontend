"use client";
import "@chatscope/chat-ui-kit-styles/dist/default/styles.min.css";
import { MainContainer, Sidebar } from "@chatscope/chat-ui-kit-react";
import {
	Tabs,
	TabsContent,
	TabsList,
	TabsTrigger,
} from "@ikseer/ui/components/ui/tabs";
import CurrentOpenedChat from "./opened-chat";
import { CreatedChatSidebar } from "./sidebar-created-chat";
import { NewChatSidebar } from "./sidebar-new-chat";

export default function MainChatComponent() {
	return (
		<div className="hero relative min-hero">
			<MainContainer responsive>
				<Sidebar position="left" scrollable={false} className="py-2">
					<Tabs defaultValue="createdChatSidebar" className="w-full">
						<TabsList className="w-full bg-blue-200 text-zinc-950">
							<TabsTrigger value="createdChatSidebar" className="">
								Chats
							</TabsTrigger>
							<TabsTrigger value="newchat" className="">
								New chat
							</TabsTrigger>
						</TabsList>
						<TabsContent value="createdChatSidebar">
							<CreatedChatSidebar />
						</TabsContent>
						<TabsContent value="newchat">
							<NewChatSidebar />
						</TabsContent>
					</Tabs>
				</Sidebar>
				<CurrentOpenedChat />
			</MainContainer>
		</div>
	);
}
