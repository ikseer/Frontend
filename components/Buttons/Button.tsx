'use client';
import React from 'react';
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
  startIcon?: React.ReactNode;
  endIcon?: React.ReactNode;
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
  startIcon,
  endIcon,
}: buttonProps) {
  const buttonStyle = { width, height };
  return (
    
      <button
        style={buttonStyle}
        type={type ? type : 'submit'}
        className={`flex justify-center items-center rounded  ${background ? background : 'bg-teal-600'} ${ButtonClassName ? ButtonClassName : 'mt-5 mb-3.5'}`}
        onClick={onClick}
        disabled={disabled}
    >
      {startIcon &&
          <div className="mr-5">
            {startIcon}
          </div>
        }

      {title}

        {endIcon &&
          <div className="ml-5">
            {endIcon}
          </div>
        }
      </button>
  );
}
