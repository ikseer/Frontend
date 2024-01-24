import Image from "next/image"
import {Link} from "../../navigation"
import "../../app/[locale]/globals.css"
import "./thridPartyAuth.css"
interface AuthShapeDataType {
    authImage: string,
    text?: string,
    width?: string
}

export default function AuthShape({authImage, text, width, className}: AuthShapeDataType){
    const widthStyle = {
        width
    }
    return (
        <section className="thrid-party-shape mb-6 rounded" style = {widthStyle}  >
            <Link href="/yousef" className="flex items-center justify-center  py-2 ">
                <Image src={authImage} alt="auth image" className="mr-8  w-6 h-6 inline-block"/>
                <span>Continue with {text}</span>
            </Link>
        </section>
    )
}
