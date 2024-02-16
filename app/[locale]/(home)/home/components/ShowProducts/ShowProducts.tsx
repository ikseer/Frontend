'use client';
import SingleProductCard from '../ProductCards/SingleProductCard';

import { useGetProduct } from '@/customHooks/Home/useProduct';
import Button from '@/components/Buttons/Button';
//interface
import {SingleProductCardType} from "../home.types"

export default function ShowCards() {
  const { data, fetchNextPage, isFetchingNextPage, hasNextPage } =
    useGetProduct();
  let pages = data?.pages;

  const handleFetchNextData = () => {
    fetchNextPage();
    console.log(isFetchingNextPage, 'next page', hasNextPage);
    // console.log(data)
  };

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
              currPage.results.map((item:SingleProductCardType) => (
                <SingleProductCard key={`${item.id}`} 
                 item={item}
                 />
              )),
          )}
      </div>
      <Button
        title="Show more"
        onClick={handleFetchNextData}
        width="200px"
        height="40px"
        background="bg-white-200 dark:bg-zinc-950 "
        type="button"
        ButtonClassName={` text-semibold text-center my-5 mx-auto border-2 border-solid border-gray-200 dark:border-zinc-900`}
      />
    </div>
  );
}
