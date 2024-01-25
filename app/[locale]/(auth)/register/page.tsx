'use client';
// main
import React, {createContext, useState } from 'react';

// components
import RegisterFirstStep from './RegisterFirstStep';
import RegisterSecondStep from './RegisterSecondStep';
import RegisterThridStep from './RegisterThridStep';
import StepperNav from '@/components/Stepper/StepperNav';
// import StepperComponent from '@/components/Stepper/StepperComponent';
import StepperNavigationButtons from '@/components/Stepper/StepperNavigationButtons';
import RegisterContainer from './AuthContainer';

// css
import './register.css';

// interface
interface providerType {
  triggerFunction: string;
  setTriggerFunction: React.Dispatch<React.SetStateAction<string>>;
}

export const nextRefProvider = createContext(null);

export default function Register() {
  const [triggerFunction, setTriggerFunction] = useState<string>('');
  const value: providerType = { triggerFunction, setTriggerFunction };

  const stepperNavLists = [
    ['1', 'First', 'Basic Data'],
    ['2', 'Second', 'Phone Number'],
    ['3', 'Third', 'Confirm Email'],
  ];
  // const stepperComponent = [<RegisterFirstStep />, <RegisterSecondStep />, <RegisterThridStep  />]

  return (
    <div className="auth-parent ">
      <div data-hs-stepper>
        <StepperNav stepperNavLists={stepperNavLists} />

        {/* didn't work */}

        {/* <!-- Stepper Content --> */}
        <nextRefProvider.Provider value={value as providerType}>
          {/* <StepperComponent stepperComponent={stepperComponent} /> */}
          <div className="mt-5 sm:mt-8">
            <div data-hs-stepper-content-item='{"index": 1}'>
              <RegisterContainer>
                <RegisterFirstStep />
              </RegisterContainer>
            </div>
            <div
              data-hs-stepper-content-item='{"index": 2}'
              style={{ display: 'none;' }}
            >
              <RegisterContainer>
                <RegisterSecondStep />
              </RegisterContainer>
            </div>
            <div
              data-hs-stepper-content-item='{"index": 3, "isFinal": true} '
              style={{ display: 'none' }}
            >
              <RegisterContainer>
                <RegisterThridStep />
              </RegisterContainer>
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
  );
}
