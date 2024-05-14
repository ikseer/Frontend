'use client';

// Main
;
import AuthContainer from '../register/auth-container';
import { useForm } from 'react-hook-form';

// Components
import AuthButton from '@/components/site/Buttons/Button';
import AuthTextField from '@/components/site/InputField/InputField';

// Hooks
import { useResetPassword } from '@/customHooks/Auth/useResetPassword';

// CSS
import '../register/register.css';

// Interface
type ResetPasswordDataType = {
  email: string;
};

export default function ResetPassword() {
  const { register, formState, handleSubmit } =
    useForm<ResetPasswordDataType>();
  const { errors } = formState;
  const { mutate } = useResetPassword();
  const handleResetPassword = (data: ResetPasswordDataType) => {
    mutate(data);
  };

  return (
    <div className="auth-parent">
      <div className="pt-4">
        <AuthContainer>
          <form
            className="flex flex-col items-center justify-center py-5"
            noValidate
            onSubmit={handleSubmit(handleResetPassword)}
            autoComplete="off"
          >
            <h1 className="text-2xl mb-4 text-center"> Reset password</h1>
            <p className="text-center text-gray-700 dark:text-gray-400 w-1/2 mb-4">
              If you forgot your password, please enter your email below to rest
              it.
            </p>
            <AuthTextField
              id="email"
              placeholder="example@email.com"
              width="75%"
              register={register}
              errors={errors}
              object={{
                required: {
                  value: true,
                  message: 'Email is required',
                },
              }}
            />

            <AuthButton
              title="Reset password"
              width="75%"
              height="40px"
              ButtonClassName="mt-3 mb-5 text-white font-normal"
            />
          </form>
        </AuthContainer>
      </div>
    </div>
  );
}
