export function ResponsiveAction() {
	return (
		<div className="md:hidden">
			<button
				type="button"
				className="hs-collapse-toggle hover:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600 flex items-center justify-center w-8 h-8 text-sm font-semibold text-gray-800 border border-gray-200 rounded-full"
				data-hs-collapse="#navbar-collapse-with-animation"
				aria-controls="navbar-collapse-with-animation"
				aria-label="Toggle navigation"
			>
				<svg
					className="hs-collapse-open:hidden flex-shrink-0 w-4 h-4"
					xmlns="http://www.w3.org/2000/svg"
					width="24"
					height="24"
					viewBox="0 0 24 24"
					fill="none"
					stroke="currentColor"
					stroke-width="2"
					stroke-linecap="round"
					stroke-linejoin="round"
				>
					<title>Open</title>
					<line x1="3" x2="21" y1="6" y2="6" />
					<line x1="3" x2="21" y1="12" y2="12" />
					<line x1="3" x2="21" y1="18" y2="18" />
				</svg>
				<svg
					className="hs-collapse-open:block flex-shrink-0 hidden w-4 h-4"
					xmlns="http://www.w3.org/2000/svg"
					width="24"
					height="24"
					viewBox="0 0 24 24"
					fill="none"
					stroke="currentColor"
					stroke-width="2"
					stroke-linecap="round"
					stroke-linejoin="round"
				>
					<title>Close</title>
					<path d="M18 6 6 18" />
					<path d="m6 6 12 12" />
				</svg>
			</button>
		</div>
	);
}
