'use client';
import { useGetOneProduct } from '@/customHooks/Home/useOneProduct ';
import ShowImage from './components/ProductImage/ShowImage';
import Rating from '@/components/Rating/Rating';
import Share from '@/components/Share/Share';
import Price from './components/Price';
import SpecialOffer from './components/SpecialOffer';
// import IncrementAndDecrement from '../../components/IncrementAndDecrement';
import AddToCardButton from './components/AddToCard';
import BuyNowButton from './components/BuyNow';
import SpecificProductTabs from './components/SpecificProductTabs';

interface paramsType {
  params: {
    productId: string;
    locale: string;
  };
}

export default function CurrentProduct({ params }: paramsType) {
  const { productId } = params;
  console.log(productId, 'params');
  const { data } = useGetOneProduct(productId);

  return (
    <div>
      <div className="grid grid-cols-1 gap-y-3 md:grid-cols-2 lg:gap-x-[20px] ">
        <ShowImage images={data?.images} />
        <div className="pt-10 px-5">
          <h1 className="text-2xl font-bold mb-3">
            Product Name - {data?.name}
          </h1>
          <div className="flex items-center gap-x-2 mb-6 justify-between">
            <Rating rating={3} reviewNumber={5} />
            <Share
              ShareLink={'Share Link here'}
              ShareText="Share this Product"
            />
          </div>
          <p className="text-gray-500 dark:text-zinc-500 mb-6 flex gap-x-2">
            <span>company</span>
            <p>{data?.factory_company}</p>
          </p>
          <Price
            price={400}
            old_price={data?.discount?.length > 0 ? data?.discount[0] : false}
            discount={data?.discount?.length > 1 ? data?.discount[1] : false}
          />

          <p className="mb-6"></p>
          {data?.discount?.length > 0 && <SpecialOffer />}
          <div className="flex mt-10 items-center">
            {/* <IncrementAndDecrement /> */}
            <AddToCardButton />
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
