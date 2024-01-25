'use client'
import React, {useContext, useRef, useEffect} from 'react'
import {nextRefProvider} from '@/app/[locale]/(auth)/register/page'



export default function StepperNavigationButtons () {
  const contextType = useContext(nextRefProvider)
  if(!contextType) throw new Error('Context is null') 
    
  const {setTriggerFunction} = contextType
  const nextButtonRef = useRef(null)
    
  useEffect(() => {
    if(setTriggerFunction && typeof setTriggerFunction == 'function') setTriggerFunction(nextButtonRef)
  }, [nextButtonRef, setTriggerFunction])


  return (
    <div className="mt-5 flex justify-between items-center gap-x-2">
      {/* Didn't remove this because give me error "can find property of null" the preline might use queryselector to select this button
                like queryselector([data-hs-stepper-back-btn]) */}
      <button type="button" className="invisible" data-hs-stepper-back-btn> </button>

      <button ref={nextButtonRef} type="button" className="py-2 px-3 inline-flex items-center gap-x-1 text-sm font-semibold rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none" data-hs-stepper-next-btn>
                    Next
        <svg className="flex-shrink-0 w-4 h-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m9 18 6-6-6-6"/></svg>
      </button>

      <button type="button" className="py-2 px-3 inline-flex items-center gap-x-1 text-sm font-semibold rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none"  data-hs-stepper-finish-btn style={{display: 'none'}}>
                    Finish
      </button>
    </div>
  )
}