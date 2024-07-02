"use client";
import StepperNavigationButtons from "../Stepper/stepper-navigation-buttons";
import RegisterContainer from "../auth-container";
import RegisterContextProvider from "../context/register-context";
import { RegisterFirstStep } from "./register-first-step";
import { RegisterSecondStep } from "./register-second-step";
import { RegisterThridStep } from "./register-thrid-step";

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
					style={{ display: "none;" }}
				>
					<RegisterContainer>
						<RegisterSecondStep />
					</RegisterContainer>
				</div>
				<div
					data-hs-stepper-content-item='{"index": 3, "isFinal": true} '
					style={{ display: "none" }}
				>
					<RegisterContainer>
						<RegisterThridStep />
					</RegisterContainer>
				</div>
			</div>
			<StepperNavigationButtons />
		</RegisterContextProvider>
	);
}
