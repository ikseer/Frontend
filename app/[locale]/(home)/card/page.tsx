'use client'
import useCard from "@/store/card"
export default function showShoppingItems() {
    const {cardItems} = useCard()
    console.log(cardItems)
    return (
        <div>
            Yousef here
        </div>
    )
}