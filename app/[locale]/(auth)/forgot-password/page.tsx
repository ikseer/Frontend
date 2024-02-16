import React from 'react';
import RegisterContainer from '../register/AuthContainer';
import ForgetPasswordComponent from './ForgetPasswordComponent';
import '../register/register.css';

export default function ForgetPassword() {
  return (
    <div className="auth-parent pt-10">
      <RegisterContainer>
        <ForgetPasswordComponent />
      </RegisterContainer>
    </div>
  );
}
