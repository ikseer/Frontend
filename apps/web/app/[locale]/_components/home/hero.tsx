"use client";
import { Button } from "@ikseer/ui/components/ui/button";
import { LuMapPin } from "react-icons/lu";
import { LuArrowRight } from "react-icons/lu";

const GoToProduct = () => console.log("GoToProduct");
export default function Hero() {
	return (
		<div className="bg-teal-500 flex justify-between items-center h-calc relative bg-gradient-to-r from-[#06534C] from-4% to-[#00776C] dark:from-[#00776C] dark:from-40% dark:to-[#06534C]">
			<div className="w-full pl-10 md:w-9/12 lg:w-6/12">
				<h1 className="text-2xl font-bold text-center text-white dark:text-zinc-900 md:text-start">
					Smart pharmacy
				</h1>
				<p className="mt-5 mb-8 text-lg font-light text-center text-zinc-200 dark:text-zinc-800 dark:font-medium md:text-start">
					Find medicines, and get them easy from an automated smart pharmacy.
				</p>
				<div className="flex flex-col items-center md:flex-row gap-x-10">
					<Button
						onClick={GoToProduct}
						className="px-5 py-2 text-teal-600 bg-white dark:bg-zinc-950 w-[200px] h-[40px]"
					>
						Explore product <LuArrowRight />
					</Button>
					<div className="flex items-center mt-3 text-xl font-medium text-white md:mt-0 gap-x-2 dark:text-zinc-950">
						<span>Nearby pharmacies </span>
						<LuMapPin />
					</div>
				</div>
			</div>
			<img
				src="/home/hero.png"
				alt="hero-section"
				className="absolute right-0 hidden h-full md:w-4/12 md:mr-50 lg:right-0 lg:w-5/12 md:block"
			/>
		</div>
	);
}
