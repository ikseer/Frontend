export default function Price({
	old_price,
	price,
	discount,
}: { price: number; old_price?: number; discount?: number }) {
	return (
		<section>
			{old_price ? (
				<div className="flex items-center">
					<p className="text-red-600 text-bold font-bold mr-[1px] text-3xl">
						${price}
					</p>
					<sub className="mt-2">
						<del className="text-base font-normal">${old_price}</del>
					</sub>
					<p className="px-2 py-1 ml-4 text-white bg-red-600 rounded-lg">
						{discount}%
					</p>
				</div>
			) : (
				<p>${price}</p>
			)}
		</section>
	);
}
