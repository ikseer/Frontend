"use client";
import { Button } from "@ikseer/ui/src/components/ui/button";
import { LuMapPin } from "react-icons/lu";
import { LuArrowRight } from "react-icons/lu";
import hero from "./hero.svg";

const GoToProduct = () => console.log("GoToProduct");
export default function Hero() {
	return (
		<div
			className="bg-teal-500 flex justify-between items-center h-calc relative
        bg-gradient-to-r from-[#06534C] from-4% to-[#00776C]
        dark:from-[#00776C] dark:from-40% dark:to-[#06534C]
        "
		>
			<div className="md:w-9/12 lg:w-6/12 w-full pl-10">
				<h1 className="dark:text-zinc-900 md:text-start text-2xl font-bold text-center text-white">
					Smart pharmacy{" "}
				</h1>
				<p className="text-zinc-200 dark:text-zinc-800 dark:font-medium md:text-start mt-5 mb-8 text-lg font-light text-center">
					Find medicines, and get them easy from an automated smart pharmacy.
				</p>
				<div className="md:flex-row gap-x-10  flex flex-col items-center">
					<Button
						onClick={GoToProduct}
						className="px-5 py-2 text-teal-600 bg-white dark:bg-zinc-950 w-[200px] h-[40px]"
					>
						Explore product <LuArrowRight />
					</Button>
					<div className=" md:mt-0 gap-x-2 dark:text-zinc-950 flex items-center mt-3 text-xl font-medium text-white">
						<span>Nearby pharmacies </span>
						<LuMapPin />
					</div>
				</div>
			</div>
			<img
				src={hero.src}
				alt="hero-section"
				className="md:w-4/12 md:mr-50 lg:right-0 lg:w-5/12 md:block  absolute right-0 hidden h-full"
			/>
		</div>
	);
}
