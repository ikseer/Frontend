import StepperNav from "./Stepper/stepper-nav";
import { RegisterSteps } from "./_components/register";
import "./register.css";

export default function Register() {
	return (
		<main className="auth-parent hero flex items-center justify-center flex-col">
			<div data-hs-stepper>
				<StepperNav />
				<RegisterSteps />
			</div>
		</main>
	);
}
