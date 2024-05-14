export default function DividerText({ text }: { text: string }) {
	return (
		<div className="or-divider py-3 flex items-center text-sm text-gray-800 before:flex-[1_1_0%] before:border-t before:border-gray-600 before:me-6 after:flex-[1_1_0%] after:border-t after:border-gray-600 after:ms-6 dark:text-white dark:before:border-gray-600 dark:after:border-gray-600">
			{text}
		</div>
	);
}
