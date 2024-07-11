import type { Entity, PaginationResult } from "@ikseer/lib/types";
import {
	type UseMutationOptions,
	type UseQueryOptions,
	useInfiniteQuery,
	useMutation,
	useQuery,
	useQueryClient,
} from "@tanstack/react-query";
import type { CRUD_API } from "./crud-api";
import type { SearchOptions } from "./types";

export function createCRUDHooks<
	T = Entity,
	ByID_Data = T,
	CreationData = Exclude<T, keyof Entity>,
	UpdateData = CreationData,
>(key: string, crud: CRUD_API<T, ByID_Data, CreationData, UpdateData>) {
	const keys = {
		getById: (id?: string) => [key, "by-id", id],
		list: (searchOps?: SearchOptions) => [key, "list", searchOps],
		infinite: (searchOps?: SearchOptions) => [key, "infinite", searchOps],
		create: () => [key, "create"],
		update: (id?: string) => [key, "update", id],
		delete: (id?: string) => [key, "delete", id],
	};

	const useGetById = (id?: string, options?: UseQueryOptions<ByID_Data>) =>
		useQuery({
			queryKey: keys.getById(id),
			queryFn: () => crud.getById(id as string),
			enabled: !!id,
			...options,
		});

	const useList = (
		searchOps?: SearchOptions,
		options?: UseQueryOptions<PaginationResult<T>>,
	) =>
		useQuery({
			queryKey: keys.list(searchOps),
			queryFn: () => crud.list(searchOps),
			...options,
		});

	const useInifinite = (searchOps?: SearchOptions) =>
		useInfiniteQuery<PaginationResult<T>>({
			queryKey: keys.infinite(searchOps),
			initialPageParam: 0,
			getNextPageParam: (lastPage, allPages) =>
				lastPage.next ? allPages.length : undefined,
			queryFn: ({ pageParam = 0 }) =>
				crud.list({
					...searchOps,
					pagination: {
						...searchOps?.pagination,
						pageIndex: pageParam as number,
					},
				}),
		});

	const useCreate = (options?: UseMutationOptions<T, Error, CreationData>) => {
		const queryClient = useQueryClient();
		return useMutation({
			mutationKey: keys.create(),
			mutationFn: crud.create,
			...options,
			onSuccess: (...args) => {
				queryClient.invalidateQueries({
					queryKey: keys.list().slice(0, 2),
				});
				queryClient.invalidateQueries({
					queryKey: keys.infinite().slice(0, 2),
				});
				options?.onSuccess?.(...args);
			},
		});
	};

	const useUpdate = (
		options?: UseMutationOptions<
			T,
			Error,
			Partial<UpdateData> & { id: string }
		>,
	) => {
		const queryClient = useQueryClient();
		return useMutation({
			mutationKey: keys.update(),
			mutationFn: crud.update,
			...options,
			onSuccess: (...args) => {
				queryClient.invalidateQueries({
					queryKey: keys.list().slice(0, 2),
				});
				queryClient.invalidateQueries({
					queryKey: keys.infinite().slice(0, 2),
				});
				options?.onSuccess?.(...args);
			},
		});
	};

	const useDelete = (
		options?: UseMutationOptions<T, Error, { id: string }>,
	) => {
		const queryClient = useQueryClient();
		return useMutation({
			mutationKey: keys.delete(),
			mutationFn: crud.del,
			...options,
			onSuccess: (...args) => {
				queryClient.invalidateQueries({
					queryKey: keys.list().slice(0, 2),
				});
				queryClient.invalidateQueries({
					queryKey: keys.infinite().slice(0, 2),
				});
				options?.onSuccess?.(...args);
			},
		});
	};

	return {
		useGetById,
		useList,
		useInifinite,
		useCreate,
		useUpdate,
		useDelete,
		keys,
	};
}
