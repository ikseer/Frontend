'use client';
import hero from './hero.svg'
import Button from "@/components/Buttons/Button"
import { LuMapPin } from "react-icons/lu";
import { LuArrowRight } from "react-icons/lu";

const GoToProduct = () => (
    console.log("GoToProduct")
)
export default function Hero() {

    // linear-gradient(90deg, #06534C 4.13%, #00776C 95.79%)
    return (
        <div className="bg-teal-500 flex justify-between items-center h-calc 
        bg-gradient-to-r from-[#06534C] from-4% to-[#00776C]
        dark:from-[#00776C] dark:from-40% dark:to-[#06534C]
        ">
            <div className="pl-10 w-5/12">
                <h1 className="text-2xl  font-bold text-white 
                dark:text-zinc-900">Smart pharmacy </h1>
                <p className='text-slate-200 mt-5 mb-8 dark:text-zinc-800 text-lg font-light dark:font-medium'>Find medicines, and get them easy from an automated smart pharmacy.</p>
                <div className="flex gap-x-10 items-center">
                    <Button 
                    title="Explore product" 
                    width="200px"
                    height="40px"
                    onClick={GoToProduct}
                    Icon={<LuArrowRight />}
                    ButtonClassName="px-5 py-2 text-teal-600"
                    background="bg-white dark:bg-zinc-950"
                    />
                    <div className="flex gap-x-2 items-center text-white dark:text-zinc-950 text-xl font-medium">
                        <span>Nearby pharmacies </span>
                        <LuMapPin />
                    </div>
                </div>
            </div>
            <img src={hero.src} alt="hero-section" className="h-full w-6/12 "/>
        </div>

    )
}