import type { Chat, Message, PaginationResult } from "@ikseer/lib/types";
import type { AxiosInstance } from "axios";
import { z } from "zod";
import { CRUD_API } from "../utils/crud-api";

export class ChatAPI {
	chat: CRUD_API<PaginationResult<Chat>, z.infer<typeof chatSchema>>;

	constructor(private http: AxiosInstance) {
		this.chat = new CRUD_API("/chat/conversations/", http);
	}
}

export const chatSchema = z.object({
	patient: z.string(),
	doctor: z.string(),
});

////////////////////////////////
/******** Message API *******/
////////////////////////////////

export class MessageAPI {
	message: CRUD_API<PaginationResult<Message>, z.infer<typeof MessageSchema>>;

	constructor(private http: AxiosInstance) {
		this.message = new CRUD_API("/chat/messages/", http);
	}
}

export const MessageSchema = z.object({
	text: z.string(),
	conversation: z.string(),
});
