import RegisterContainer from "../register/auth-container";
import ForgetPasswordComponent from "./forget-password";
import "../register/register.css";

export default function ForgetPassword() {
	return (
		<div className="auth-parent hero flex items-center justify-center">
			<RegisterContainer>
				<ForgetPasswordComponent />
			</RegisterContainer>
		</div>
	);
}
