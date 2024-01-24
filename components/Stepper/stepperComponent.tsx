import React from 'react'
// when use give me unexpected behaviour 
export default function StepperComponent({stepperComponent}) {
    return (  
      <div className="mt-5 sm:mt-8">
        {stepperComponent.map((component, indx) => (
          <div data-hs-stepper-content-item={`{"index": ${indx + 1}}'`} style={indx? {display:"none"}: {}}>
            {console.log(indx)}
                {component}
          </div>
        ))}
    </div> 
    )
}