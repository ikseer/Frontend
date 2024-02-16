import Button from "@/components/Buttons/Button"
import { TbShoppingBag } from "react-icons/tb";
export default function BuyNowButton() {
    return (
        <div>
            <Button 
            title="Buy now"
            width="120px"
            height="30px"
            startIcon={<TbShoppingBag/>}
            />

        </div>
    )
}