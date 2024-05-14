export default function ProfileDropDown() {
	return (
		<div className="hs-dropdown relative inline-flex [--placement:bottom-right]">
			<button
				id="hs-dropdown-with-header"
				type="button"
				className="w-[2.375rem] h-[2.375rem] inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-full border border-transparent text-gray-800 hover:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none dark:text-white dark:hover:bg-gray-700 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
			>
				profile drop down here.
			</button>

			<div
				className="hs-dropdown-menu transition-[opacity,margin] duration hs-dropdown-open:opacity-100 opacity-0 hidden min-w-[15rem] bg-white shadow-md rounded-lg p-2 dark:bg-gray-800 dark:border dark:border-gray-700"
				aria-labelledby="hs-dropdown-with-header"
			>
				profile Drop down
			</div>
		</div>
	);
}
