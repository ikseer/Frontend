// Interface
interface SelectType {
  label: string;
  selectOptions: string[];
  register: any;
}

export default function Select({ label, selectOptions, register }: SelectType) {
  return (
    <div className="flex justify-between mt-3">
      <label
        htmlFor="hs-select-label"
        className="cursor-pointer block text-sm font-medium mb-2 dark:text-white w-2/12"
      >
        {label}
      </label>
      <select
        id="hs-select-label"
        className="w-9/12 py-3 px-4 pe-9 block 
         border-gray-200 rounded-lg text-sm4 focus:border-gray-200 focus:ring-gray-200 
         disabled:opacity-50 disabled:pointer-events-none 
        dark:bg-zinc-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600"
        {...register('timezone')}
      >
        <option selected>Open this select menu</option>
        {selectOptions.map((item, index) => (
          <option key={`${index} - ${item}`} value={item}>
            {item}
          </option>
        ))}
      </select>
    </div>
  );
}
