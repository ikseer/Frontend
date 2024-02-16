interface PriceType {
  old_price: number;
  new_price: number;
}
export default function Price({ old_price, new_price }: PriceType) {
  return (
    <div>
      {old_price ? (
        <div className="flex">
          <p className="text-red-600 text-bold">{new_price} </p>
          <del >{old_price}</del>
        </div>
      ) : (
        <p>{new_price}</p>
      )}
    </div>
  );
}
