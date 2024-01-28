'use client'


interface buttonProps {
    title:string,
    width:string,
    height:string,
    background?:string,
    ButtonClassName?:string
};


export default function AuthButton({title, width, height, background, ButtonClassName}:buttonProps) {
  const buttonStyle = {width, height}

  return (
    <button style={buttonStyle} className={` rounded  ${background? background: 'bg-teal-600'} ${ButtonClassName? ButtonClassName : 'mt-5 mb-3.5' }`} >
      {title}
    </button>
  )
}
