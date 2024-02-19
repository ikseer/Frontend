import React from 'react';
interface TabsType {
  componentsList:  React.ReactElement[]
  componentNames: string[];
  containerClassName: string
  componentsIcons?: React.ReactElement[] | string[]
}

export default function Tabs({
  componentsList,
  componentNames,
  containerClassName,
  componentsIcons
}: TabsType) {
  console.log(componentsList, "listYousef", componentsList.length);
  return (
    <>
      <div className="mt-10">
        <nav
          className={containerClassName}
          aria-label="Tabs"
          role="tablist"
        >
          {componentNames.map((component, indx) => (

            <button
              type="button"
              className={`hs-tab-active:font-semibold 
            py-2 px-4 inline-flex items-center gap-x-2 border-b-2 border-transparent text-sm whitespace-nowrap 
            disabled:opacity-50 disabled:pointer-events-none 
            focus:outline-none 
            hs-tab-active:border-slate-400 hs-tab-active:bg-slate-200 
            hs-tab-active:text-gray-800 
             hover:text-gray-800 focus:text-gray-800 
             text-zinc-400

             dark:hover:text-gray-100 hs-tab-active:dark:bg-zinc-950
             hs-tab-active:dark:text-gray-100
            hs-tab-active:rounded-xl hs-tab-active:dark:border-gray-800
             dark:text-gray-400
             ${indx === 0&&'active'}

            `}
              id={`tabs-with-icons-item-${indx + 1}`}
              data-hs-tab={`#tabs-with-icons-${indx + 1}`}
              aria-controls={`tabs-with-icons-${indx + 1}`}
              role="tab"
              key={component}
            >
              {componentsIcons && componentsIcons[indx]}
              {component}
            </button>
          ))}
        </nav>
      </div>
      <div className="mt-3">
        {componentsList.map((component, indx) => (
           <div
              id={`tabs-with-icons-${indx + 1}`}
              role="tabpanel"
              className={indx === 0 ? '' : "hidden"}
              aria-labelledby={`tabs-with-icons-item-${indx + 1}`}
              key={component.key}
            >
              { component}
      </div>
        ))}
      </div>
    </>
  );
}
