import {
	useInfiniteQuery,
	useMutation,
	useQuery,
	type UseMutationOptions,
	type UseQueryOptions,
} from "@tanstack/react-query";
import type { CRUD_API } from "./crud-api";
import type { Entity, PaginationResult } from "@ikseer/lib/types";
import type { SearchOptions } from "./types";

export function createCRUDHooks<
	T = Entity,
	CreationData = Exclude<T, keyof Entity>,
	UpdateData = CreationData,
>(key: string, crud: CRUD_API<T, CreationData, UpdateData>) {
	const useGetById = (id?: string, options?: UseQueryOptions<T>) =>
		useQuery({
			queryKey: [key, "by-id", id],
			queryFn: () => crud.getById(id as string),
			enabled: !!id,
			...options,
		});

	const useList = (
		searchOps?: SearchOptions,
		options?: UseQueryOptions<PaginationResult<T>>,
	) =>
		useQuery({
			queryKey: [key, "list", searchOps],
			queryFn: () => crud.list(searchOps),
			...options,
		});

	const useInifinite = (searchOps?: SearchOptions) =>
		useInfiniteQuery<PaginationResult<T>>({
			queryKey: [key, "infinite", searchOps],
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

	const useCreate = (options?: UseMutationOptions<T, Error, CreationData>) =>
		useMutation({
			mutationKey: [key, "create"],
			mutationFn: crud.create,
			...options,
		});

	const useUpdate = (options?: UseMutationOptions<T, Error, UpdateData>) =>
		useMutation({
			mutationKey: [key, "update"],
			mutationFn: crud.update,
			...options,
		});

	return { useGetById, useList, useInifinite, useCreate, useUpdate };
}
