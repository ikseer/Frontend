"use client";
import { useFormContext } from "react-hook-form";
export default function Radio({
	name,
	value,
}: {
	name: string;
	value: string;
}) {
	const { register } = useFormContext();
	return (
		<input
			type="radio"
			value={value}
			className="shrink-0  rounded-full border-zinc-600  text-zinc-600 focus:ring-zinc-800 checked:border-zinc-800 disabled:opacity-50 disabled:pointer-events-none \
                dark:text-gray-50 dark:bg-gray-200 dark:border-gray-200 dark:checked:bg-gray-500 dark:checked:border-gray-500 dark:focus:ring-offset-gray-800"
			{...register(name)}
			id={value}
		/>
	);
}
