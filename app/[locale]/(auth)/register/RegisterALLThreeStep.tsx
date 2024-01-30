'use client';
//main
import React, { createContext, useState } from 'react';

//components

import RegisterFirstStep from './RegisterFirstStep';
import RegisterSecondStep from './RegisterThridStep';
import RegisterThridStep from './RegisterSecondStep';
import RegisterContainer from './AuthContainer';
import StepperNavigationButtons from '@/components/Stepper/StepperNavigationButtons';

// interface
interface RegisterAllThreeStepType {
  firstStepKeys: string[];
  secondStepKeys: string[];
  thirdStepKeys: string[];
}
interface providerType {
  triggerFunction: React.RefObject<string> ;
  setTriggerFunction: React.Dispatch<React.SetStateAction<string>>;
}

export const nextRefProvider = createContext<providerType | null>(null);

export default function RegisterAllThreeStep({
  firstStepKeys,
  secondStepKeys,
  thirdStepKeys,
}: RegisterAllThreeStepType) {
  const [triggerFunction, setTriggerFunction] = useState<React.RefObject<string> | null>(null);
  const value: providerType = { triggerFunction, setTriggerFunction };

  return (
    <nextRefProvider.Provider value={value as providerType}>
      {/* <StepperComponent stepperComponent={stepperComponent} /> */}
      <div className="mt-5 sm:mt-8">
        <div data-hs-stepper-content-item='{"index": 1}'>
          <RegisterContainer>
            <RegisterFirstStep firstStepKeys={firstStepKeys} />
          </RegisterContainer>
        </div>
        <div
          data-hs-stepper-content-item='{"index": 2}'
          style={{ display: 'none;' }}
        >
          <RegisterContainer>
            <RegisterSecondStep secondStepKeys={secondStepKeys} />
          </RegisterContainer>
        </div>
        <div
          data-hs-stepper-content-item='{"index": 3, "isFinal": true} '
          style={{ display: 'none' }}
        >
          <RegisterContainer>
            <RegisterThridStep thirdStepKeys={thirdStepKeys} />
          </RegisterContainer>
        </div>
      </div>
      <StepperNavigationButtons />
    </nextRefProvider.Provider>
  );
}
