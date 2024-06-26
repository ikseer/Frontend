import type { ReactNode } from "react";

export default function AccordionTitle({
	Icon,
	mainText,
	additionalText,
}: { Icon: ReactNode; mainText: string; additionalText: string }) {
	return (
		<section className=" space-y-2 bg-teal-600 p-2 text-center rounded">
			<div className="flex  gap-x-2 justify-center text-blue-800">
				{Icon}
				<p className="text-xl font-semibold ">{mainText}</p>
			</div>
			<p className="text-gray-300">{additionalText}</p>
		</section>
	);
}
