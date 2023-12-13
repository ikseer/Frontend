import Image from "next/image"
import {Link} from "../../navigation"
import "../../app/[locale]/globals.css"
import "./thridPartyAuth.css"

export default function AuthShape({authImage, text}){
    return (
        <section className="thrid-party-shape mb-6 rounded">
            <Link href="/yousef" className="flex items-center justify-center  py-2 ">
                <Image src={authImage} alt="auth image" className="mr-8  w-6 h-6 inline-block"/>
                <span>Continue with {text}</span>
            </Link>
        </section>
    )
}
