import { IoMdStar, IoMdStarHalf, IoMdStarOutline } from "react-icons/io";

export default function Rating({ rating }: { rating: number }) {
	return (
		<div className="flex items-center my-5 cursor-pointer gap-x-1">
			{Array.from(Array(Math.floor(rating)).keys()).map((ind) => (
				<IoMdStar key={`full-${ind}`} className="w-5 h-5 text-orange-500" />
			))}
			{Array.from(Array(Math.round(rating - Math.floor(rating))).keys()).map(
				(ind) => (
					<IoMdStarHalf
						key={`half-${ind}`}
						className="w-5 h-5 text-orange-500"
					/>
				),
			)}
			{Array.from(Array(5 - Math.round(rating)).keys()).map((ind) => (
				<IoMdStarOutline key={`empty-${ind}`} className="w-5 h-5" />
			))}
		</div>
	);
}
