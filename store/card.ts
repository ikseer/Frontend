import {create} from 'zustand'


interface cardItems {
    id: number
    title: string
    price: number
    description: string
    category: string
    image: string
    quantity: number
}

interface useCardType {
    cardItems: cardItems[]
}

const useCard = create<useCardType>((set , get) => ({
    cardItems: [],
    addItemToCard: (item: cardItems) => {
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