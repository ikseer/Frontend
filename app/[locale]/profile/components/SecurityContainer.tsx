// Main
import React,{ReactNode} from 'react'


// Interface
interface SecurityContainerType {
    children: ReactNode
}


export default function SecurityContainer({ children }: SecurityContainerType) {
    return ( 
    <div className="w-2/3 mx-auto mt-16">
             {children}
    </div>
    )
}