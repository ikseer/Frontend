import { Button } from "@ikseer/ui/src/components/ui/button";
import Image from "next/image";

export default function Account({
	image,
	name,
	buttonText,
}: { image: string; name: string; buttonText: string }) {
	return (
		<div className="flex justify-between my-3">
			<div className="flex">
				<div className="w-10 h-10">
					<Image src={image} alt={name} />
				</div>
				<h1 className="text-zinc-700 dark:text-zinc-200 text-2xl font-bold">
					{name}
				</h1>
			</div>

			<Button
				type="submit"
				className="bg-zinc-100 border-2 hover:bg-gray-200
                 hover:text-zinc-500  text-teal-600 
               dark:bg-zinc-950 dark:text-zinc-400 font-medium border-1 border-zinc-200
               dark:border-gray-800 dark:hover:bg-gray-800 dark:hover:text-zinc-300
               w-[150px]
               h-[42px]
               "
			>
				{buttonText}
			</Button>
		</div>
	);
}
