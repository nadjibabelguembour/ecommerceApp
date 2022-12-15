import React, { useContext } from "react";
import "./achats.css";
import CartContext from "../../../store/CartContext";
const Achats = () => {
  const cartCtx = useContext(CartContext);
  return (
    <div className="mesAchats">
      <div className="head">
        <h1>سلة المشتريات</h1>
        
        <span>عدد المشتريات :{cartCtx.products.length}</span>
      </div>
      <ul className="cart-items">
        {cartCtx.products.map((item) => {
          return (
            <li className="cart-item" key={item.id}>
              <div className="prod">
                <div className="image">
                  <img src={item.image} alt="" />
                </div>
                <h3>{item.name}</h3>
              </div>
              <div className="info">
              <span className="qty">x{item.quantity}</span>
              <span className="price">${item.price}</span>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Achats;
