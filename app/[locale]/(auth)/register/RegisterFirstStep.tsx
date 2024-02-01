'use client';

// main
import { Link } from '@/navigation';
import { useForm } from 'react-hook-form';
// import { DevTool } from '@hookform/devtools';

// components
import AuthButton from '@/components/Buttons/AuthButton';
import DividerText from '@/components/Divider/Divider';
import AuthShape from '@/components/ThridParthAuth/ThridPartyAuth';
import AuthTextField from '@/components/TextField/AuthTextField';
import Radio from '@/components/Radio/Radio';

// icons & images
import Google from '@/public/images/auth/Google.svg';
import Facebook from '@/public/images/auth/Facebook.svg';
import { LuMail } from 'react-icons/lu';
import { LuKeyRound } from 'react-icons/lu';
import { LuUser } from 'react-icons/lu';
import Auth from '@/modules/Auth/Auth';

//hooks
import { useRegister } from '@/customHooks/Auth/useRegister';

// css
import './register.css';
import { useRegisterContext } from './RegisterContext';

// interface
interface RegisterMainDataType {
  firstStepKeys: string[];
}
interface formDataType {
  username: string;
  email: string;
  first_name: string;
  last_name: string;
  password: string;
  gender: string;
}

export default function RegisterMainData({
  firstStepKeys,
}: RegisterMainDataType) {
  const { register, handleSubmit, formState } = useForm<formDataType>();
  const { errors } = formState;

  const { triggerFunction } = useRegisterContext();
  const { mutate, isError, error } = useRegister();

  const handleLoginSubmit = (data: formDataType) => {
    mutate(data);
    if(!isError) {
      // triggerFunction.current?.click();
      Auth.setUser({
        id: '1',
        token:'yousef'
      })
    }
  };

  const firstNameObject = {
    required: {
      value: true,
      message: firstStepKeys[15],
    },
  };
  const lastNameObject = {
    required: {
      value: true,
      message: firstStepKeys[15],
    },
  };

  const emailObject = {
    required: {
      value: true,
      message: firstStepKeys[15],
    },
  };

  const userObject = {
    required: {
      value: true,
      message: firstStepKeys[15],
    },
  };
  const passwordObject = {
    required: {
      value: true,
      message: firstStepKeys[15],
    },
  };
  const GenderOjbect = {
    required: {
      value: true,
      message: firstStepKeys[15],
    },
  };
  const welcomeMessage = firstStepKeys[0];
  const TextFieldName = [
    [firstStepKeys[1], 'first_name', firstNameObject],
    [firstStepKeys[2], 'last_name', lastNameObject],
  ] as const;

  // icon, placeholder, id, object
  const TextFieldOther = [
    [<LuMail key="email" />, firstStepKeys[3], 'email', , emailObject],
    [<LuUser key="username" />, firstStepKeys[4], 'username', userObject],
    [
      <LuKeyRound key="password" />,
      firstStepKeys[5],
      'password',
      passwordObject,
    ],
  ] as const;

  const radioList = [
    firstStepKeys[6],
    firstStepKeys[7],
    firstStepKeys[8],
  ] as const;
  const txt0 = firstStepKeys[9];
  const txt1 = firstStepKeys[10];
  const txt2 = firstStepKeys[11];
  const txt3 = firstStepKeys[12];

  const authShape = [
    [Google, firstStepKeys[13]],
    [Facebook, firstStepKeys[14]],
  ];
  console.log(errors)

  return (
    <>
      <form
        className="flex items-center justify-center flex-col rounded-lg"
        autoComplete="off"
        onSubmit={handleSubmit(handleLoginSubmit)}
        data-hs-stepper
        noValidate
      >
        <h1 className="pt-5 text-2xl font-bold">{welcomeMessage}</h1>
        <div className="w-3/4 mt-5">
          <div className="grid grid-cols-2 gap-5">
            {TextFieldName.map((textField, indx) => (
              <AuthTextField
                key={indx}
                placeholder={textField[0] as string}
                id={textField[1] as string}
                register={register}
                errors={errors}
                object={textField[2] as any}
              />
            ))}
          </div>
          {TextFieldOther.map((textField, indx) => (
            <AuthTextField
              key={indx}
              Icon={textField[0]}
              placeholder={textField[1] as string}
              id={textField[2] as string}
              register={register}
              errors={errors}
              object={textField[3] as any}
            />
          ))}

          <div>
            <div className="flex gap-x-6">
              {radioList.map((e) => (
                <Radio
                  key={e}
                  text={e}
                  register={register}
                  object={GenderOjbect}
                />
              ))}
            </div>
            <p
              className={`ml-2 text-xs font-normal text-red-500 dark:text-red-600 ${
                errors.gender && errors.gender.message ? '' : 'invisible'
              }`}
            >
              {errors.gender && errors.gender.message
                ? errors.gender.message
                : 'Input Validation'}
            </p>
          </div>
        </div>

        {/* <StepperNavigationButtons /> */}
        <AuthButton
          title={txt0}
          width="75%"
          height="42px"
          data-hs-stepper-next-btn
        />

        <section className="w-3/4">
          <span>{txt1} </span>
          <Link href="/login" style={{ color: '#0B9992', fontWeight: '600' }}>
            {txt2}
          </Link>
        </section>
        <DividerText text={txt3} />
        <div className="grid grid-cols-2 w-full px-4 gap-2">
          {authShape.map((shape, indx) => (
            <AuthShape key={indx} authImage={shape[0]} text={shape[1]} />
          ))}
        </div>
      </form>
      {/* <DevTool control={control} /> */}
    </>
  );
}
