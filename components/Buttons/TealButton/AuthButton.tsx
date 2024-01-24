'use client'
import { MouseEventHandler } from "react"
import "./AuthButton.css"

interface buttonProps {
    title:string,
    width:string,
    height:string,
};


export default function AuthButton({title, width, height}:buttonProps) {
    const buttonStyle = {width, height}
    
    return (
        <button style={buttonStyle} className="auth-button mt-5 mb-3.5" >
            {title}
        </button>
    )
}