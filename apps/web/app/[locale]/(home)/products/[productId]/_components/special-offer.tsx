export default function SpecialOffer() {
	return (
		<div className="flex items-center px-2 py-4 text-orange-600 bg-orange-100 rounded-lg gap-x-2">
			<h1 className="font-semibold text-md">Special Offer: </h1>
			<div className="flex items-center gap-x-2" />
			<p className="text-sm text-zinc-950 dark:text-gray-500">
				Remains until the end of the offer.
			</p>
		</div>
	);
}
