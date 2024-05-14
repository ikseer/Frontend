'use client';
import {RegisterFirstStep} from './register-first-step';
import {RegisterSecondStep} from './register-second-step';
import {RegisterThridStep} from './register-thrid-step';
import RegisterContainer from '../auth-container';
import StepperNavigationButtons from '../Stepper/stepper-navigation-buttons';
import RegisterContextProvider from '../context/RegisterContext';

export function RegisterSteps() {
  return (
    <RegisterContextProvider>
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
            <RegisterSecondStep  />
          </RegisterContainer>
        </div>
        <div
          data-hs-stepper-content-item='{"index": 3, "isFinal": true} '
          style={{ display: 'none' }}
        >
          <RegisterContainer>
            <RegisterThridStep  />
          </RegisterContainer>
        </div>
      </div>
      <StepperNavigationButtons />
    </RegisterContextProvider>
  );
}
