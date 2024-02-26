'use client';
import SingleProductCard from '../ProductCard/SingleProductCard';

import { useGetProducts } from '@/customHooks/Home/useProducts';
import Button from '@/components/Buttons/Button';
//interface
import { ProductType } from '@/types/product.types';

export default function ShowCards() {
  const { data, fetchNextPage, isFetchingNextPage, hasNextPage } =
    useGetProducts();
  let pages = data?.pages;

  return (
    <div className="p-10">
      <h1
        className="text-3xl font-bold text-zinc-950 dark:text-white text-center mb-10
            "
      >
        Featured Products
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {Array.isArray(pages) &&
          pages.map(
            (currPage) =>
              Array.isArray(currPage.results) &&
              currPage.results.map((item: ProductType) => (
                <SingleProductCard key={`${item.id}`} item={item} />
              )),
          )}
      </div>
      <Button
        title={
          isFetchingNextPage
            ? 'Loading more...'
            : hasNextPage
              ? 'Load More'
              : 'Nothing more to load'
        }
        onClick={() => fetchNextPage()}
        disabled={!hasNextPage || isFetchingNextPage}
        width="200px"
        height="40px"
        background="bg-white-200 dark:bg-zinc-950 "
        type="button"
        ButtonClassName={`text-semibold text-center my-5 mx-auto border-2 border-solid border-gray-200 dark:border-zinc-900`}
      />
    </div>
  );
}
