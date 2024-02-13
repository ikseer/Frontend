import RegisterContainer from '../register/AuthContainer';
import ConfirmPin from './ConfirmPIn';
import "../register/register.css";

export default function ConfirmPinCode (){
    return (
        <div className="pt-10 auth-parent">
            <RegisterContainer>
                <ConfirmPin />
            </RegisterContainer>

        </div>
    )
}