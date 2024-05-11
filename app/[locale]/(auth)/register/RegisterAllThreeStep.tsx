'use client';
// Main
;

//Components
import RegisterFirstStep from './RegisterFirstStep';
import RegisterSecondStep from './RegisterThridStep';
import RegisterThridStep from './RegisterSecondStep';
import RegisterContainer from './AuthContainer';
import StepperNavigationButtons from '@/components/site/Stepper/StepperNavigationButtons';
import RegisterContextProvider from './context/RegisterContext';

// Interface
interface RegisterAllThreeStepType {
  firstStepKeys: string[];
  secondStepKeys: string[];
  thirdStepKeys: string[];
}

export default function RegisterAllThreeStep({
  firstStepKeys,
  secondStepKeys,
  thirdStepKeys,
}: RegisterAllThreeStepType) {
  return (
    <RegisterContextProvider>
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
    </RegisterContextProvider>
  );
}
