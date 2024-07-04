import { clientAPI } from "../utils/api.client";
import { createCRUDHooks } from "../utils/crud-hooks";

export const pharmaciesHooks = createCRUDHooks(
	"pharmacies",
	clientAPI.pharmacies.pharmacy,
);
