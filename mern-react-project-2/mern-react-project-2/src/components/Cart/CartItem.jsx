import Classes from './CartItem.module.css'
import { useContext } from "react"
import CartContext from "../../store/CartContext"

const CartItem = ({product}) => {
  const cartCtx = useContext(CartContext)
  return (
    <li className={Classes['single-product']}>
        <div>
            <h2>{product.name}</h2>
            <div className={Classes['product-information']}>
                <span className={Classes['product-price']}>$ {product.price}</span>
                <span className={Classes['product-quantity']}>x {product.quantity}</span>
            </div>
        </div>
        <div className={Classes['cart-buttons-action']}>
            <button onClick={() => cartCtx.addItemToCart(product)}>+</button>
            <button onClick={() => cartCtx.removeItemFromCart(product.id)}>-</button>
        </div>
    </li>
  )
}

export default CartItem