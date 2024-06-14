export default function CartHeader() {
	return (
		<div className="grid grid-cols-12 my-3">
			<p className="col-span-5">Product</p>
			<p className="col-span-3">Quality</p>
			<p className="col-span-3">Price</p>
			<p className="col-span-1">Delete</p>
		</div>
	);
}
