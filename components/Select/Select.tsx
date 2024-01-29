

export default function Select() {
    return (
        <>
            <label htmlFor="hs-select-label" className="block text-sm font-medium mb-2 dark:text-white">Label</label>
            <select id="hs-select-label" className="py-3 px-4 pe-9 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600">
            <option selected>Open this select menu</option>
            <option>1</option>
            <option>2</option>
            <option>3</option>
            </select>
        </>

    )
}