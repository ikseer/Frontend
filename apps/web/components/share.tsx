import { Share } from "lucide-react";

export function ShareComponent({ link, text }: { link: string; text: string }) {
	console.info(link);
	return (
		<div className="flex gap-x-1 items-center cursor-pointer">
			<div className=" py-2 px-3 rounded-md border-[1px] border-gray-500 border-solid dark:border-zinc-700">
				<Share />
			</div>
			<div>
				<p> {text}</p>
			</div>
		</div>
	);
}
