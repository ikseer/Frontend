'use client'
import SingleProductCard from "../ProductCards/SingleProductCard";

import { useGetProduct } from "@/customHooks/Home/useProduct";

export default function ShowCards() {
    const {data} = useGetProduct()
    console.log(data, "data")

    return (
        <div className="p-10">
            <h1 className="text-3xl font-bold text-zinc-950 dark:text-white text-center mb-10
            ">Featured Products</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                {/* {pages && pages.map((item: any, indx: number) => (   
                    <SingleProductCard key={`${indx} - ${item.id}`}/>
                ))} */}
                <SingleProductCard />
                <SingleProductCard />
                <SingleProductCard />
                <SingleProductCard />
            </div>

        </div>
    );
}