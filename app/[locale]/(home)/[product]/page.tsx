'use client';
import { useGetProducts } from '@/customHooks/Home/useOneProduct ';
import ShowImage from './components/ShowImage';
import Rating from '@/components/Rating/Rating';
import Share from '@/components/Share/Share';
import Price from './components/Price';
import SpecialOffer from './components/SpecialOffer';
import IncrementAndDecrement from '../components/IncrementAndDecrement';
import AddToCardButton from './components/AddToCard';
import BuyNowButton from './components/BuyNow';
import Tabs from './components/ProductSpecificTabs';

interface paramsType {
  params: {
    product: string;
    locale: string;
  };
}
export default function CurrentProduct({ params }: paramsType) {
  const { data } = useGetProducts();
  console.log('data is: ', data);
  console.log(params);
  const { product } = params;
  return (
    <div>
      <div className="grid grid-cols-1 gap-y-3 md:grid-cols-2 lg:gap-x-[20px] ">
        <ShowImage />
        <div className="pt-10 px-5">
          <h1 className="text-2xl font-bold mb-3">Product Name - {product}</h1>
          <div className="flex items-center gap-x-2 mb-6 justify-between">
            <Rating rating={3} reviewNumber={5} />
            <Share
              ShareLink={'Share Link here'}
              ShareText="Share this Product"
            />
          </div>
          <p className="text-gray-500 dark:text-zinc-500 mb-6">
            Description for this product
          </p>
          <Price new_price={400} old_price={224} discount={56} />
          <p className="mb-6"></p>
          <SpecialOffer />
          <div className="flex mt-10 items-center">
            <IncrementAndDecrement />
            <AddToCardButton />
            <BuyNowButton />
          </div>
        </div>
      </div>
      <div className="p-10">
        <Tabs />
      </div>
    </div>
  );
}
