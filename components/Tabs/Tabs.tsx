// Main
import React from 'react';


// Icons
import { LuUser } from 'react-icons/lu';
import { LuSettings } from 'react-icons/lu';
// payment icons didn't found in react icons, icon found in lucide library but din't found in react-icons lib.
import { MdPayment } from 'react-icons/md';


// Interface
interface TabsType {
  profileSetting: React.ReactNode;
  paymentSetting: React.ReactNode;
  securitySetting: React.ReactNode;
}


export default function Tabs({
  profileSetting,
  paymentSetting,
  securitySetting,
}: TabsType) {
  return (
    <>
      <div className="mt-10">
        <nav
          className="flex space-x-2 justify-center"
          aria-label="Tabs"
          role="tablist"
        >
          <button
            type="button"
            className=" hs-tab-active:font-semibold 
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
             active
          
            "
            id="tabs-with-icons-item-1"
            data-hs-tab="#tabs-with-icons-1"
            aria-controls="tabs-with-icons-1"
            role="tab"
          >
            {<LuUser />}
            Basic Settings
          </button>
          <button
            type="button"
            className=" hs-tab-active:font-semibold 
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
             
          
            "
            id="tabs-with-icons-item-2"
            data-hs-tab="#tabs-with-icons-2"
            aria-controls="tabs-with-icons-2"
            role="tab"
          >
            {<LuSettings />}
            Security and Privacy
          </button>
          <button
            type="button"

            className=" hs-tab-active:font-semibold 
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
             
          
            "  
            id="tabs-with-icons-item-3"
            data-hs-tab="#tabs-with-icons-3"
            aria-controls="tabs-with-icons-3"
            role="tab"
          >
            {<MdPayment />}
            Payments
          </button>
        </nav>
      </div>

      <div className="mt-3">
        <div
          id="tabs-with-icons-1"
          role="tabpanel"
          aria-labelledby="tabs-with-icons-item-1"
        >
          {profileSetting}
        </div>
        <div
          id="tabs-with-icons-2"
          className="hidden"
          role="tabpanel"
          aria-labelledby="tabs-with-icons-item-2"
        >
          {securitySetting}
        </div>
        <div
          id="tabs-with-icons-3"
          className="hidden"
          role="tabpanel"
          aria-labelledby="tabs-with-icons-item-3"
        >
          {paymentSetting}
        </div>
      </div>
    </>
  );
}
