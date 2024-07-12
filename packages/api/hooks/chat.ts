import { clientAPI } from "../utils/api.client";
import { createCRUDHooks } from "../utils/crud-hooks";

export const chatHooks = createCRUDHooks("chat", clientAPI.chat.chat);

export const MessageHooks = createCRUDHooks(
	"message",
	clientAPI.message.message,
);
