export default function SpecialOffer() {
	return (
		<div className="flex items-center gap-x-2 bg-orange-100 px-2 py-4 rounded-lg text-orange-600">
			<h1 className="text-md font-semibold">Special Offer: </h1>
			<div className="flex gap-x-2 items-center"></div>
			<p className="text-sm text-zinc-950 dark:text-gray-500">
				Remains until the end of the offer.
			</p>
		</div>
	);
}
