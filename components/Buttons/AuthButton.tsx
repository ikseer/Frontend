'use client';

import { ButtonHTMLAttributes } from 'react';

interface buttonProps {
  title: string;
  width: string;
  height: string;
  background?: string;
  ButtonClassName?: string;
  type?:ButtonHTMLAttributes<HTMLButtonElement>['type']
  onClick?: () => void
}

export default function AuthButton({
  title,
  width,
  height,
  background,
  ButtonClassName,
  type,
  onClick
}: buttonProps) {
  const buttonStyle = { width, height };

  return (
    <button
      style={buttonStyle}
      type={type?type:'submit'}
      className={` rounded  ${background ? background : 'bg-teal-600'} ${ButtonClassName ? ButtonClassName : 'mt-5 mb-3.5'}`}
      onClick={onClick}
    >
      {title}
    </button>
  );
}
