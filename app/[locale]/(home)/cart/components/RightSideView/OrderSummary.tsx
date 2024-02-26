export default function OrderSummary() {
  return (
    <div>
      <div className="flex justify-between">
        <p>Discount</p>
        <p>{(0).toFixed(2)}</p>
      </div>
      <div className="flex justify-between">
        <p>Delivery</p>
        <p>{(291.9).toFixed(2)}</p>
      </div>
      <div className="flex justify-between">
        <p>Tax</p>
        <p>{(12.9).toFixed(2)}</p>
      </div>
      <div className="flex justify-between">
        <p>total</p>
        <p>{(12.9).toFixed(4)}</p>
      </div>
    </div>
  );
}
