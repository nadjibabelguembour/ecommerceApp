import React, { useContext , useState} from 'react'
import './billing.css'
import CartContext from "../../../store/CartContext";

const Billing = () => {
    const cartCtx = useContext(CartContext);
    const shipping = 10.50;
    var total=0.0;
    cartCtx.totalPrice===0?total=0:total = cartCtx.totalPrice + shipping;

    const [payment, setPayment]=useState();
    const bool=payment==='ccp'?true:false;

  return (
    <div className='billing'>
        <div className="head">
            <h1>الفاتورة</h1>
        </div>
      <ul className="billing-items">
            <li className="billing-item">
              <h3>قيمة المشتريات</h3>
              <span>${cartCtx.totalPrice}</span>
            </li>
            <li className="billing-item">
              <h3>سعر التوصيل</h3>
              <span>${shipping}</span>
            </li>
            <div className="total">
                <h3>السعر النهائي مع رسوم التوصيل</h3>
                <span>${total}</span>
        </div>
      </ul>
   
   

      

     
    </div>
  )
}

export default Billing
