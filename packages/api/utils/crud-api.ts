import type { Entity, PaginationResult } from "@ikseer/lib/types";
import type { AxiosInstance } from "axios";
import { getSearchParams } from "./get-search-params";
import type { SearchOptions } from "./types";

export class CRUD_API<
	T = Entity,
	ByID_Data = T,
	CreationData = Exclude<T, keyof Entity>,
	UpdateData = CreationData,
> {
	constructor(
		public route: string,
		private http: AxiosInstance,
		public isFormData = false,
	) {
		if (!route.startsWith("/"))
			throw new Error("CRUD_API routes should starts with '/'");
		if (!route.endsWith("/"))
			throw new Error("CRUD_API routes should ends with '/'");
	}

	create = async (product: CreationData) => {
		const fn = this.isFormData ? this.http.postForm : this.http.post;
		return await fn<T>(this.route, product).then((res) => res.data);
	};

	getById = async (id: string) => {
		return await this.http
			.get<ByID_Data>(`${this.route}${id}`)
			.then((res) => res.data);
	};

	list = async (options?: SearchOptions) => {
		const params = getSearchParams(options);
		return await this.http
			.get<PaginationResult<T>>(this.route, {
				params: params,
			})
			.then((res) => res.data);
	};

	update = async ({ id, ...data }: Partial<UpdateData> & { id: string }) => {
		const fn = this.isFormData ? this.http.patchForm : this.http.patch;
		return await fn<T>(`${this.route}${id}/`, data).then((res) => res.data);
	};

	del = async ({ id }: { id: string }) => {
		return await this.http
			.delete(`${this.route}${id}/`)
			.then((res) => res.data);
	};
}
