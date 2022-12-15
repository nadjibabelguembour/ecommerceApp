import {createContext} from "react";

const CartContext = createContext({
    products: [],
    totalPrice: 0,
    addItemToCart:() => {} ,
    removeItemFromCart: () => {}
})

export default CartContext