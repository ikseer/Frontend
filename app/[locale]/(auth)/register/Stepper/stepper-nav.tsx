import { useTranslations } from "next-intl";

export default function StepperNav() {
  const t = useTranslations()
  const mainStyle = {
    width: '550px',
    margin: 'auto',
  };
  const stepperNavLists = [
    ['1', t('First'), t('Basic details')],
    ['2', t('Second'), t('Confirm Email')],
    ['3', t('Third'), t('Phone number')],
  ];
  return (
    <ul
      className="relative flex flex-row gap-x-2 pt-5 content-center"
      style={mainStyle}
    >
      {stepperNavLists.map((list) => (
        <li
          key={list[0]}
          className="flex items-center gap-x-2 shrink basis-0 flex-1 group"
          data-hs-stepper-nav-item={`{"index": ${list[0]}}`}
        >
          <span className="min-w-[28px] min-h-[28px] group inline-flex items-center text-sm align-middle">
            <span className="w-7 h-7 flex justify-center items-center flex-shrink-0 bg-gray-100 font-medium text-gray-800 rounded-full group-focus:bg-gray-200 dark:bg-gray-700 dark:text-white dark:group-focus:bg-gray-600 hs-stepper-active:bg-gray-400 hs-stepper-active:text-white hs-stepper-success:bg-green-500 hs-stepper-success:text-white hs-stepper-completed:bg-teal-500 hs-stepper-completed:group-focus:bg-teal-600">
              <span className="hs-stepper-success:hidden hs-stepper-completed:hidden">
                {list[0]}
              </span>
              <svg
                className="hidden flex-shrink-0 h-4 w-4 hs-stepper-success:block"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="3"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <title>Stepper Completed</title>
                <polyline points="20 6 9 17 4 12" />
              </svg>
            </span>
            <div className="ms-2 text-sm  ">
              <p className="text-gray-800 font-semibold">{list[1]}</p>
              <p className="text-gray-50">{list[2]}</p>
    
            </div>
          </span>
          <div className="w-full h-0.5 flex-1 bg-gray-200 group-last:hidden hs-stepper-success:bg-green-500 hs-stepper-completed:bg-teal-600"/>
        </li>
      ))}
    </ul>
  );
}
