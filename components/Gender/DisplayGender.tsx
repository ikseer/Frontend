
// Interface
interface DisplayGenderType {
  register: any
}


export default function DisplayGender({register}: DisplayGenderType) {
  const genders = ["Male", "Female", "Prefer not to say"];
  return (
    <div className="flex justify-between mt-5">
      <p className="w-2/12">Gender</p>

      <ul className="flex flex-col sm:flex-row w-9/12">
      {genders.map((gender,indx ) => (
        
        <li key={`${gender}`}
        className="border-2 w-1/3 inline-flex items-center gap-x-2.5 py-3 px-4 text-sm font-medium border-gray-200 shadow-sm  focus:z-10 focus:border-gray-300 focus:ring-gray-300  -mt-px first:rounded-t-lg first:mt-0 last:rounded-b-lg sm:-ms-px sm:mt-0 sm:first:rounded-se-none sm:first:rounded-es-lg sm:last:rounded-es-none sm:last:rounded-se-lg dark:bg-zinc-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600">
          <div className="relative flex items-start w-full">
            <div className="flex items-center h-5">
              <input
                id={`gender-${indx}`}
                name="gender"
                type="radio"
                value={gender}
                className="shrink-0 mt-0.5 rounded-full border-zinc-600  text-zinc-600 focus:ring-zinc-800 checked:border-zinc-800 disabled:opacity-50 disabled:pointer-events-none \
                dark:text-gray-50 dark:bg-gray-200 dark:border-gray-200 dark:checked:bg-gray-500 dark:checked:border-gray-500 dark:focus:ring-offset-gray-800"
                {...register('gender')}
              />
            </div>
            <label
              htmlFor={`gender-${indx}`}
              className="ms-3 block w-full text-sm text-gray-600 dark:text-gray-500"
            >
              {gender}
            </label>
          </div>
        </li>
      ))}

      </ul>
    </div>
  );
}
