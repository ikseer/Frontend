'use client'
import useCard from "@/store/card"
export default function ShowShoppingItems() {
    const {cardItems} = useCard()
    console.log(cardItems)
    return (
        <div>
            {JSON.stringify(cardItems)}
        </div>
    )
}