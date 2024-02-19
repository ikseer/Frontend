import {create} from 'zustand'

import {SingleProductCardType} from "@/types/product.types";

interface useCardType {
    cardItems: SingleProductCardType[]
    // eslint-disable-next-line no-unused-vars
    addItemToCard: (item: SingleProductCardType) => void
}

const useCard = create<useCardType>((set , get) => ({
    cardItems: [],
    addItemToCard: (item: SingleProductCardType) => {
        console.log(get().cardItems)
        const isExist = get().cardItems.find(cardItem => cardItem.id === item.id)
        if(isExist) {
            if(typeof isExist.quantity === "number") {
                isExist.quantity++;
            }
            set({ cardItems: [...get().cardItems] })

        } else {
            set({ cardItems: [...get().cardItems, {...item, quantity: 1}] })
        }
    }
}))

export default useCard