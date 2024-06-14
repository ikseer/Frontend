import { Button } from "@/components/ui/button";

export default function BasicSettingButton({
	onClick,
}: {
	onClick: () => void;
}) {
	return (
		<div className="gap-x-2 flex items-center mt-10">
			<Button
				type="submit"
				className="border-2 border-teal-600 w-[150px] h-[42px] text-teal-600"
			>
				Save
			</Button>
			<Button
				type="button"
				onClick={onClick}
				className=" border-2hover:bg-gray-200
            hover:text-zinc-500  text-teal-600 
            dark:bg-zinc-950 dark:text-zinc-400 font-medium border-1 border-zinc-200
            dark:border-gray-800 dark:hover:bg-gray-800 dark:hover:text-zinc-300
            w-[150px] h-[42px] bg-white"
			>
				Reset
			</Button>
		</div>
	);
}
