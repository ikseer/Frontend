
import StepperNav from './Stepper/stepper-nav';
import { RegisterSteps } from './_components/register';
import './register.css';

export default function Register() {
  return (
    <main className="auth-parent">
      <div data-hs-stepper>
        <StepperNav />
        <RegisterSteps/>
      </div>
    </main>
  );
}
