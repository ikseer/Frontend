'use client'


interface buttonProps {
    title:string,
    width:string,
    height:string,
    background?:string,
};


export default function AuthButton({title, width, height, background}:buttonProps) {
  const buttonStyle = {width, height}

  return (
    <button style={buttonStyle} className={` rounded mt-5 mb-3.5 ${background? background: 'bg-teal-600'}`} >
      {title}
    </button>
  )
}
