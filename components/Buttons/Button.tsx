'use client';

// Components
import { ButtonHTMLAttributes } from 'react';


// Interface
interface buttonProps {
  title: string;
  width: string;
  height: string;
  background?: string;
  ButtonClassName?: string;
  type?: ButtonHTMLAttributes<HTMLButtonElement>['type'];
  onClick?: () => void;
  disabled?: boolean;
}


export default function AuthButton({
  title,
  width,
  height,
  background,
  ButtonClassName,
  type,
  disabled,
  onClick,
}: buttonProps) {
  const buttonStyle = { width, height };
  return (
    <button
      style={buttonStyle}
      type={type ? type : 'submit'}
      className={` rounded  ${background ? background : 'bg-teal-600'} ${ButtonClassName ? ButtonClassName : 'mt-5 mb-3.5'}`}
      onClick={onClick}
      disabled={disabled}
    >
      {title}
    </button>
  );
}
