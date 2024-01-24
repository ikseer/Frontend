import React from 'react'

interface stepperNavDataType {
    stepperNavLists:string[][]
}

export default function StepperNav({stepperNavLists}:stepperNavDataType) {
    const mainStyle = {
        width: "550px",
        margin:'auto',
      
      }
    return (
        <ul className="relative flex flex-row gap-x-2 pt-5 content-center"  style={mainStyle}>
            {stepperNavLists.map(list => (
            <li className="flex items-center gap-x-2 shrink basis-0 flex-1 group" data-hs-stepper-nav-item={`{"index": ${list[0]}}`}>
                    <span className="min-w-[28px] min-h-[28px] group inline-flex items-center text-xs align-middle">
                    <span className="w-7 h-7 flex justify-center items-center flex-shrink-0 bg-gray-100 font-medium text-gray-800 rounded-full group-focus:bg-gray-200 dark:bg-gray-700 dark:text-white dark:group-focus:bg-gray-600 hs-stepper-active:bg-blue-600 hs-stepper-active:text-white hs-stepper-success:bg-blue-600 hs-stepper-success:text-white hs-stepper-completed:bg-teal-500 hs-stepper-completed:group-focus:bg-teal-600">
                        <span className="hs-stepper-success:hidden hs-stepper-completed:hidden">{list[0]}</span>
                        <svg className="hidden flex-shrink-0 h-4 w-4 hs-stepper-success:block" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
                    </span>
                    <span className="ms-2 text-sm font-medium text-gray-800">
                        {list[1] + "" + list[2]}
                    </span>
                    </span>
                    <div className="w-full h-0.5 flex-1 bg-gray-200 group-last:hidden hs-stepper-success:bg-blue-600 hs-stepper-completed:bg-teal-600"></div>
                </li>

            ))}
      </ul>
    )
}