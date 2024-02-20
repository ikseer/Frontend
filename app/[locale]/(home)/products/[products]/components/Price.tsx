interface PriceType {
  old_price: number;
  new_price: number;
  discount: number;
}
export default function Price({ old_price, new_price, discount }: PriceType) {
  return (
    <div>
      {old_price ? (
        <div className="flex items-center">
          <p className="text-red-600 text-bold font-bold mr-[1px] text-3xl">
            ${new_price}{' '}
          </p>
          <sub className="mt-2">
            <del className="font-normal  text-base">${old_price}</del>
          </sub>
          <p className="bg-red-600 text-white py-1 px-2 rounded-lg ml-4">
            {discount}%{' '}
          </p>
        </div>
      ) : (
        <p>${new_price}</p>
      )}
    </div>
  );
}
