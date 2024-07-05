import type { Pharmacy } from "@ikseer/lib/types";
import { zFile } from "@ikseer/lib/utils";
import type { AxiosInstance } from "axios";
import { CRUD_API } from "../utils/crud-api";
import { z } from "zod";

export class PharmaciesAPI {
	pharmacy: CRUD_API<Pharmacy, z.infer<typeof pharmacySchema>>;

	constructor(private http: AxiosInstance) {
		this.pharmacy = new CRUD_API("/pharmacy/pharmacy/", http);
	}
}

export const pharmacySchema = z.object({
	name: z.string(),
	location: z.string(),
	phone: z.string(),
	image: zFile(),
	open_time: z.coerce.string().optional().nullable(),
	close_time: z.coerce.string().optional().nullable(),
	latitude: z.coerce.string().optional().nullable(),
	longitude: z.coerce.string().optional().nullable(),
});
