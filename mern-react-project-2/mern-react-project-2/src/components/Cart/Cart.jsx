import Modal from "../modal/Modal"
import Classes from './Cart.module.css'
import CartItem from "./CartItem"
import { useContext } from "react"
import CartContext from "../../store/CartContext"
import {Link} from 'react-router-dom'

const Cart = ({onOpenModal}) => {
  const cartCtx = useContext(CartContext)

  const totalPrice = `$${cartCtx.totalPrice.toFixed(2)}`
  const hasItems = cartCtx.products.length > 0;

  const items = cartCtx.products.map(product => (
      <CartItem
        key={product.id}
        product={product}
      />
  ))

  return (
    <Modal onOpenModal={onOpenModal}>
        <ul className={Classes['cart-products']}>
          {items}
        </ul>
        <div className={Classes['total-price']}>
          <span>السعر الإجمالي</span>
          <span>{totalPrice}</span>
        </div>
        <div className={Classes['buttons-action']}>
           {hasItems && (
            <Link to='checkout'> شراء</Link>
           )}
          <button className={Classes['close-button']} onClick={onOpenModal}>غلق</button>
        </div>
    </Modal>
  )
}

export default Cart