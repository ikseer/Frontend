'use client';
import { useGetProducts } from '@/customHooks/Home/useSpecificProduct';
import ShowImage from './components/ShowImage';
import Rating from '@/components/Rating/Rating';
import Share from '@/components/Share/Share';
import  Price from "./components/Price"
import SpecialOffer from "./components/SpecialOffer"
import   IncrementAndDecrement from './components/IncrementAndDecrement';
import AddToCardButton from './components/AddToCard';
import BuyNowButton from './components/BuyNow'


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
    <div className="grid grid-cols-1 md:grid-cols-2 ">
      <ShowImage />
      <div>
        <h1>Product Name - {product}</h1>
        <div className="flex items-center gap-x-2">
          <Rating rating={3} reviewNumber={5} />
          <Share ShareLink={'Share Link here'} ShareText="Share this Product" />
        </div>
        <p>Description for this product</p>
        <Price new_price={4} old_price={4}/>
        <SpecialOffer />
        <div className="flex">
            <IncrementAndDecrement />
            <AddToCardButton />
            <BuyNowButton />
        </div>
      </div>
    </div>
  );
}
