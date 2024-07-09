"use client";
import "@chatscope/chat-ui-kit-styles/dist/default/styles.min.css";
import { MainContainer, Sidebar } from "@chatscope/chat-ui-kit-react";
import { useGetDoctors, useGetPatients } from "@ikseer/api/hooks/accounts";
import { chatHooks } from "@ikseer/api/hooks/chat";
import { UserTypeCookie } from "@ikseer/lib/cookies.client";
import type { Chat, Patient } from "@ikseer/lib/types";
import { Skeleton } from "@ikseer/ui/components/ui/skeleton";
import {
	Tabs,
	TabsContent,
	TabsList,
	TabsTrigger,
} from "@ikseer/ui/components/ui/tabs";
import { MessageSquare } from "lucide-react";
import { useState } from "react";
import CurrentOpenedChat from "./opened-chat";
import { CreatedChatSidebar } from "./sidebar-created-chat";
import { NewChatSidebar } from "./sidebar-new-chat";

// import
export default function MainChatComponent() {
	const userType = UserTypeCookie.get();
	const [chatId, setChatId] = useState("");
	const doctors = useGetDoctors();
	const patient = useGetPatients();
	const chat = chatHooks.useInifinite({
		pagination: {
			pageSize: Number.MAX_SAFE_INTEGER,
			pageIndex: 0,
		},
	});

	//@ts-ignore
	const userChat: Chat[] = chat?.data?.pages?.[0]?.results;
	const currentDoctors = doctors?.data?.results;
	const currentPatients = patient?.data?.results;

	if (userChat?.length <= 0 || !currentDoctors || !currentPatients)
		return (
			<section className="page-container grid w-full grid-cols-5">
				<div className=" col-span-1 mb-4 space-y-2.5">
					{[...Array(9)].map((_, i) => (
						// biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
						<div key={i} className="gap-x-2 flex items-center">
							<Skeleton className="w-full h-12 mr-4" />
						</div>
					))}
				</div>
				<Skeleton className="w-full h-full col-span-4 mr-4" />
			</section>
		);
	const NotChatsYet = () => {
		if (userType === "doctor") {
			return currentPatients?.filter(
				(patient) =>
					!userChat?.map((chat) => chat?.patient).includes(patient?.id),
			);
		}
		if (userType === "patient") {
			return currentDoctors?.filter(
				(doctor) => !userChat?.map((chat) => chat?.doctor).includes(doctor?.id),
			);
		}
	};

	const currentNotChatsYet = NotChatsYet();

	console.log(userChat, currentNotChatsYet, "must be patient");
	return (
		<>
			<div className="hero min-hero relative">
				<MainContainer responsive>
					<Sidebar position="left" scrollable={false} className="py-2">
						<Tabs defaultValue="createdChatSidebar" className="w-full">
							<TabsList className="text-zinc-950 w-full bg-blue-200 rounded-0 hidden md:flex">
								<TabsTrigger value="createdChatSidebar" className="w-full">
									Chats
								</TabsTrigger>
								<TabsTrigger value="newchat" className="w-full">
									New chat
								</TabsTrigger>
							</TabsList>
							<TabsContent value="createdChatSidebar">
								<CreatedChatSidebar
									chatedWithMe={userChat}
									setChatId={setChatId}
								/>
							</TabsContent>
							<TabsContent value="newchat">
								<NewChatSidebar noChatsYet={currentNotChatsYet as Patient[]} />
							</TabsContent>
						</Tabs>
					</Sidebar>
					{chatId ? (
						<CurrentOpenedChat chatId={chatId} userChat={userChat} />
					) : (
						<SelectChatToStartChat />
					)}
				</MainContainer>
			</div>
		</>
	);
}

function SelectChatToStartChat() {
	return (
		<section className=" w-full flex flex-col items-center justify-center p-4 bg-blue-200 rounded-md shadow-md">
			<MessageSquare className="w-12 h-12 text-zinc-500 mb-4" />
			<p className="text-lg font-semibold text-zinc-700 mb-2">
				Select a chat to start a conversation
			</p>
			<p className="text-sm text-zinc-600 text-center">
				Choose a user from the list to begin chatting. If you don't see anyone,
				try refreshing or inviting friends to join!
			</p>
		</section>
	);
}
