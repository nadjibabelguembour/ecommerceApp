import { useReducer, useState, useEffect } from "react"
import CartContext from "./CartContext"

const initialState= {
  products: [],
  totalPrice: 0
}

const reducerFcn = (state,action) => {
  let updateProdcuts = [], updateTotalPrice = 0
  if(action.type == 'ADD'){
     const indexProduct = state.products.findIndex((product) => {
        return product.id === action.product.id
     })

     if(indexProduct >= 0) {
        const currentProduct = state.products[indexProduct]
        const updateCurrentProduct = {
          ...currentProduct,
          quantity: currentProduct.quantity + 1
        }
        updateProdcuts = [...state.products]
        updateProdcuts[indexProduct] = updateCurrentProduct

     }else{
        updateProdcuts = state.products.concat(action.product) 
     }

     updateTotalPrice = state.totalPrice + action.product.price
  }
  else if (action.type == 'REMOVE'){
    const indexProduct = state.products.findIndex((product) => {
      return product.id === action.id
   })
   const currentProduct = state.products[indexProduct]
    updateTotalPrice = state.totalPrice - currentProduct.price

    if(currentProduct.quantity === 1){
      updateProdcuts = state.products.filter(product => product.id !== action.id)
    }else{
      const updateCurrentProduct = {
        ...currentProduct,
        quantity: currentProduct.quantity - 1
      }
      updateProdcuts = [...state.products]
      updateProdcuts[indexProduct] = updateCurrentProduct
    }
  }
  if (action.type=== "CLEAR_CART"){

    return{...state, products:[] }
  }

  return {
    products: updateProdcuts,
    totalPrice: updateTotalPrice
  }
}
const CartProvider = ({children}) => {

  const [state, dispatch] = useReducer(reducerFcn, initialState)
  // const [pstate, setPState] = useState(0)


  const addItemToCartFnc = (product) => {
   dispatch({type: 'ADD', product})
  }
  const removeItemFromCartFcn = (id) => {
    dispatch({type: 'REMOVE', id})
  }
  //.............clear cart .................
  const clearCartFnc = () =>{
    return dispatch({type: 'CLEAR_CART'})
  }
  //.........................................

    const cartData = {
        products: state.products,
        totalPrice: state.totalPrice,
        addItemToCart: addItemToCartFnc,
        removeItemFromCart: removeItemFromCartFcn,
        clearCart: clearCartFnc
    }
    
  return (
    <CartContext.Provider value={cartData}>
        {children}
    </CartContext.Provider>
  )
}

export default CartProvider