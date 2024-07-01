export default function DividerText({ text }: { text: string }) {
	return (
		<div className=" py-3 flex items-center text-sm text-zinc-800 dark:text-zinc-100 before:flex-[1_1_0%] before:border-t before:border-zinc-800 before:me-6 after:flex-[1_1_0%] after:border-t after:border-zinc-800 after:ms-6  dark:before:border-zinc-400 dark:after:border-zinc-400">
			{text}
		</div>
	);
}
