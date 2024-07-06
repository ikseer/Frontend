"use client";
import "@chatscope/chat-ui-kit-styles/dist/default/styles.min.css";
import { MainContainer, Sidebar } from "@chatscope/chat-ui-kit-react";
import { useGetDoctors, useGetPatients } from "@ikseer/api/hooks/accounts";
import { chatHooks } from "@ikseer/api/hooks/chat";
import { UserTypeCookie } from "@ikseer/lib/cookies.client";
import {Skeleton} from "@ikseer/ui/components/ui/skeleton"
import {
	Tabs,
	TabsContent,
	TabsList,
	TabsTrigger,
} from "@ikseer/ui/components/ui/tabs";
import CurrentOpenedChat from "./opened-chat";
import { CreatedChatSidebar } from "./sidebar-created-chat";
import { NewChatSidebar } from "./sidebar-new-chat";

// import 
export default function MainChatComponent() {
	const userType = UserTypeCookie.get();
	const doctors = useGetDoctors();
	const patient = useGetPatients();
	const chat = chatHooks.useInifinite({
		pagination: {
			pageSize: Number.MAX_SAFE_INTEGER,
			pageIndex: 0
		}
	})
	console.log(doctors, patient, userType, chat);

	if (!doctors || !patient  || !chat) return (
		<section className="page-container grid w-full grid-cols-3">
			<div className=" col-span-1 mb-4 space-y-2">
			{[...Array(5)].map((_, i) => (
				// biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
<div key={i} className="gap-x-2 flex items-center">
				<Skeleton  className="w-12 h-12 rounded-full" />
				<Skeleton  className="w-full h-12 mr-4" />
			</div>
			))}
			</div>
		  <Skeleton className="w-full h-full col-span-2 mr-4" />
	  </section>
	);
	const userChat = chat?.data?.pages?.results
	const currentDoctors = doctors?.data?.pages?.results
	const  currentPatients = patient?.data?.pages?.results

	const chatsWithMe = () => {
		if (userType === "doctor") {
			if (userChat) {
				return userChat?.filter(
					(chat) => chat?.doctor?.id === currentDoctors?.id		
				)
			}
		} else if (userType === "patient") {
			if (userChat) {
				return userChat?.filter(chat => chat?.patient?.id === currentPatients?.id)
			}
	}
	const ChatsNotCreated = () => {
		if (userType === "doctor") {
			return userChat.filter(chat => chat?.doctor?.id !== currentDoctors?.id && chat?.patient?.id !== currentPatients?.id)
		} else if (userType === "patient") {
			return userChat.filter(chat => chat?.doctor?.id !== currentDoctors?.id && chat?.patient?.id !== currentPatients?.id)
		}
	}
	console.log(ChatsNotCreated(), chatsWithMe())

	return (
		<div className="hero min-hero relative">
			<MainContainer responsive>
				<Sidebar position="left" scrollable={false} className="py-2">
					<Tabs defaultValue="createdChatSidebar" className="w-full">
						<TabsList className="text-zinc-950 w-full bg-blue-200">
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
