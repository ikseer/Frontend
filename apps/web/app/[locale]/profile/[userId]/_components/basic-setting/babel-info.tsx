export default function LabelInfo({
	mainText,
	secText,
	inputText,
}: { mainText: string; secText?: string; inputText: string }) {
	return (
		<div className=" flex flex-col w-2/12">
			<label className="cursor-pointer" htmlFor={inputText}>
				{mainText}
			</label>
			<p className="text-xs text-gray-400">{secText}</p>
		</div>
	);
}
