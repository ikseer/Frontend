import { LuShoppingCart } from "react-icons/lu";
import {Link} from "@/navigation"
export default function Card() {
    return (
        <Link className="cursor-pointer" href="/cart">
            <LuShoppingCart />
        </Link>
    )
}