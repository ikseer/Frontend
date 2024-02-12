// when use give me unexpected behaviour 
// unused Component delete it when you want

import React from 'react';

export default function StepperComponent({ stepperComponent }: any) {
  return (
    <div className="mt-5 sm:mt-8">
      {stepperComponent.map((component: any, indx: number) => (
        <div
          key={indx}
          data-hs-stepper-content-item={`{"index": ${indx + 1}}'`}
          style={indx ? { display: 'none' } : {}}
        >
          {component}
        </div>
      ))}
    </div>
  );
}
