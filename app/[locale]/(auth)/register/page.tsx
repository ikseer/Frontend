'use client'
// main
import React, {useContext, useRef, createContext, useState} from 'react'

// components
import RegisterFirstStep from './RegisterFirstStep'
import RegisterSecondStep from "./RegisterSecondStep"
import RegisterThridStep from "./RegisterThridStep"
import StepperNav from "@/components/Stepper/stepperNav"
import StepperComponent from "@/components/Stepper/stepperComponent"
import StepperNavigationButtons from "@/components/Stepper/stepperNavigationButtons"
// css
import './register.css'

export const nextRefProvider = createContext(null)

export default function Register() {
    const [triggerFunction, setTriggerFunction] = useState<string>("Yousef")
    const value = {triggerFunction, setTriggerFunction}

    const stepperNavLists = [["1", "First", "Basic Data"], ["2", "Second", "Phone Number"], ["3", "Third", "Confirm Email"]]
    const stepperComponent = [<RegisterFirstStep />, <RegisterSecondStep />, <RegisterThridStep  />]


return (
	<div  className="register-parent " > 
		<div data-hs-stepper >
        <StepperNav stepperNavLists = {stepperNavLists}/>
        
        {/* didn't work */}
        {/* <StepperComponent stepperComponent={stepperComponent} /> */}

      {/* <!-- Stepper Content --> */}
      <nextRefProvider.Provider value={value}>
          <div className="mt-5 sm:mt-8">
                <div data-hs-stepper-content-item='{"index": 1}'>
                      {<RegisterFirstStep />}
                </div>
                <div data-hs-stepper-content-item='{"index": 2}' style={{display: "none;"}}>
                  {<RegisterSecondStep />}
                </div>
                <div data-hs-stepper-content-item='{"index": 3, "isFinal": true} ' style={{display: "none"}}>
                      {<RegisterThridStep />}
                </div>
          </div>
        <StepperNavigationButtons />
      </nextRefProvider.Provider>
      {/* <!-- End Content --> */}


        {/* <!-- Button Group --> */}
      {/* <!-- End Button Group --> */}

  </div>

  {/* <!-- End Stepper Content --> */}
</div>

	)
}


