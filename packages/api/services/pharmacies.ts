import type { Pharmacy } from "@ikseer/lib/types";
import { zFile } from "@ikseer/lib/utils";
import type { AxiosInstance } from "axios";
import { CRUD_API } from "utils/crud-api";
import { z } from "zod";

export class PharmaciesAPI {
	pharmacy: CRUD_API<Pharmacy>;

	constructor(private http: AxiosInstance) {
		this.pharmacy = new CRUD_API("/pharmacy/pharmacy/", http);
	}
}

export const pharmacySchema = z.object({
	name: z.string(),
	location: z.string(),
	phone: z.string(),
	image: zFile(),
	open_time: z.string().optional().nullable(),
	close_time: z.string().optional().nullable(),
	latitude: z.string().optional().nullable(),
	longitude: z.string().optional().nullable(),
});
