"use client";
// import Rating from "@/components/rating";
// import { ShareComponent } from "@/components/share";
// import { useGetOneProduct } from "../../custom-hooks/use-one-product ";
// import AddToCardButton from "./components/add-to-card";
// import BuyNowButton from "./components/buy-now";
// import Price from "./components/price";
// import ShowImage from "./components/product-image/show-image";
// import SpecialOffer from "./components/special-offer";
// import SpecificProductTabs from "./components/specific-product-tabs";

interface paramsType {
	params: {
		productId: string;
		locale: string;
	};
}

export default function CurrentProduct({ params }: paramsType) {
	return <div>null</div>;
	const { productId } = params;
	const { data } = useProductById(productId);
	return (
		<div>
			<div className="grid grid-cols-1 gap-y-3 md:grid-cols-2 lg:gap-x-[20px] ">
				<ShowImage images={data?.images} />
				<div className="px-5 pt-10">
					<h1 className="mb-3 text-2xl font-bold">
						Product Name - {data?.name}
					</h1>
					<div className="flex items-center justify-between mb-6 gap-x-2">
						<Rating rating={3} />
						<ShareComponent link="#" text="Share this Product" />
					</div>
					<p className="flex mb-6 text-gray-500 dark:text-zinc-500 gap-x-2">
						<span>company</span>
						<p>{data?.factory_company}</p>
					</p>
					<Price
						price={400}
						old_price={data?.discount?.length > 0 ? data?.discount[0] : false}
						discount={data?.discount?.length > 1 ? data?.discount[1] : false}
					/>

					<p className="mb-6" />
					{data?.discount?.length > 0 && <SpecialOffer />}
					<div className="flex items-center mt-10">
						<AddToCardButton product={data} />
						<BuyNowButton />
					</div>
				</div>
			</div>
			<div className="p-10">
				<SpecificProductTabs
					description={data?.description}
					review={data?.review}
				/>
			</div>
		</div>
	);
}
