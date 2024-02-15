import SingleProductCard from "../ProductCards/SingleProductCard";

export default function ShowCards() {
    return (
        <div className="p-10">
            <h1 className="text-3xl font-bold text-zinc-950 dark:text-white text-center mb-10
            ">Featured Products</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                <SingleProductCard />
                <SingleProductCard />
                <SingleProductCard />
                <SingleProductCard />
                <SingleProductCard />
            </div>

        </div>
    );
}