;

interface HoverDropDownType {
  dropDownWords: string[];
}

// Data will passed as map of list of list.
export default function HoverDropDown({ dropDownWords }: HoverDropDownType) {
  return (
    <div className="hs-dropdown [--strategy:static] md:[--strategy:absolute] [--adaptive:none] md:[--trigger:hover] py-3 md:py-4">
      <button
        type="button"
        className="flex items-center w-full text-gray-500 hover:text-gray-400 font-medium dark:text-gray-400 dark:hover:text-gray-500 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
      >
        {dropDownWords[0]}
        <svg
          className="flex-shrink-0 ms-2 w-4 h-4"
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
          <path d="m6 9 6 6 6-6" />
        </svg>
      </button>

      <div className="hs-dropdown-menu transition-[opacity,margin] duration-[0.1ms] md:duration-[150ms] hs-dropdown-open:opacity-100 opacity-0 w-full hidden z-10 top-full start-0 min-w-[15rem] bg-slate-50 md:shadow-2xl rounded-lg py-2 md:p-4 dark:bg-zinc-900 dark:divide-gray-700 before:absolute before:-top-5 before:start-0 before:w-full before:h-5">
        <div className="md:grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          <div className="flex flex-col mx-1 md:mx-0">
            <a
              className="group flex gap-x-5 hover:bg-gray-200 rounded-lg p-4 dark:text-gray-200 dark:hover:bg-zinc-950 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
              href="#"
            >
              <svg
                className="flex-shrink-0 w-5 h-5 mt-1"
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
                <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
                <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
              </svg>
              <div className="grow">
                <p className="font-medium text-gray-800 dark:text-gray-200">
                  Support Docs
                </p>
                {/* <p className="text-sm text-gray-500 group-hover:text-gray-800 dark:group-hover:text-gray-200">Explore advice and explanations for all of Prelines features.</p> */}
              </div>
            </a>
          </div>

          <div className="flex flex-col mx-1 md:mx-0">
            <a
              className="group flex gap-x-5 hover:bg-gray-200 rounded-lg p-4 dark:text-gray-200 dark:hover:bg-zinc-950 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
              href="#"
            >
              <svg
                className="flex-shrink-0 w-5 h-5 mt-1"
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
                <circle cx="12" cy="12" r="10" />
                <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" />
                <path d="M12 17h.01" />
              </svg>
              <div className="grow">
                <p className="font-medium text-gray-800 dark:text-gray-200">
                  Help Center
                </p>
                <p className="text-sm text-gray-500 group-hover:text-gray-800 dark:group-hover:text-gray-200">
                  Learn how to install, set up, and use Preline.
                </p>
              </div>
            </a>
          </div>
          <div className="flex flex-col mx-1 md:mx-0">
            <a
              className="group flex gap-x-5 hover:bg-gray-200 rounded-lg p-4 dark:text-gray-200 dark:hover:bg-zinc-950 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
              href="#"
            >
              <svg
                className="flex-shrink-0 w-5 h-5 mt-1"
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
                <circle cx="12" cy="12" r="10" />
                <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" />
                <path d="M12 17h.01" />
              </svg>
              <div className="grow">
                <p className="font-medium text-gray-800 dark:text-gray-200">
                  Help Center
                </p>
                <p className="text-sm text-gray-500 group-hover:text-gray-800 dark:group-hover:text-gray-200">
                  Learn how to install, set up, and use Preline.
                </p>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
