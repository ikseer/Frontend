
import * as React from 'react';
import '../../app/[locale]/globals.css'

interface DividerProps {
  text:string,
}
const DividerStyle = {
  'width':'60%',
}


export default function DividerText({text}:DividerProps) {
  
  return (
    <div style={DividerStyle} className="or-divider py-3 flex items-center text-sm text-gray-800 before:flex-[1_1_0%] before:border-t before:border-gray-600 before:me-6 after:flex-[1_1_0%] after:border-t after:border-gray-600 after:ms-6 dark:text-white dark:before:border-gray-600 dark:after:border-gray-600">
      {text}
    </div>
  );
}