import Background from "./Background.svg";

export default function SettingContainer({
	mainText,
	secondaryText,
}: {
	mainText: string;
	secondaryText: string;
}) {
	return (
		<div
			className=" p-6 mt-6 bg-no-repeat bg-cover rounded-lg"
			style={{ backgroundImage: `url(${Background.src})` }}
		>
			<div className="flex items-center">
				<h2 className="dark:text-gray-200 mb-2 mr-2 text-4xl">Setting</h2>
				<h3 className=" border-zinc-400 bg-zinc-200 dark:border-gray-800 dark:bg-zinc-950 dark:text-gray-100 rounded-xl px-4 py-2 text-gray-800 border-b-2">
					{mainText}
				</h3>
			</div>
			<p className="dark:text-gray-300 ml-2">{secondaryText}</p>
		</div>
	);
}
