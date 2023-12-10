import Image from "next/image"

export default function AuthShape({authImage, text}){
    return (
        <section>
            <Image src={authImage} alt="auth image" />
            <span>Continue with {text}</span>
        </section>
    )
}