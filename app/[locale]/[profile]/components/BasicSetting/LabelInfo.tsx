// Main 
import React from 'react'


// Interface
interface LabelInfoType {
  mainText: string;
  secText?: string;
  inputText: string;
}


export default function LabelInfo({
  mainText,
  secText,
  inputText,
}: LabelInfoType) {
  return (
    <div className="flex flex-col w-2/12 ">
      <label className="cursor-pointer" htmlFor={inputText}>
        {mainText}
      </label>
      <p className="text-xs text-gray-400">{secText}</p>
    </div>
  );
}
