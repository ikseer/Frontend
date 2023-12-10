'use client'
import { MouseEventHandler } from "react"
import "./authButton.css"

interface buttonProps {
    title:string,
    width:string,
    height:string,
    onClick:MouseEventHandler<HTMLButtonElement>,
};


export default function AuthButton({title, width, height, onClick}:buttonProps) {
    const buttonStyle = {width, height}
    
    return (
        <button style={buttonStyle} className="auth-button" onClick={onClick}>
            {title}
        </button>
    )
}