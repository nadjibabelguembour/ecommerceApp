import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import SearchIcon from "@mui/icons-material/Search";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import { useContext } from "react";
import CartContext from "../../store/CartContext";

import {
  container,
  circle,
  image,
  icon,
  buttons_hover,
} from "./Product.module.css";

const Product = ({ item }) => {
  const cartCtx = useContext(CartContext)

  const addProductToCart = (product) => {
    cartCtx.addItemToCart({
      ...product,quantity: 1
    })
  }
  return (
    <div className={container}>
      <div className={circle}></div>
      <img className={image} src={item.image} alt="" />
      <div className={buttons_hover}>
        <div className={icon} onClick={() => addProductToCart(item)}>
          <AddShoppingCartIcon />
        </div>
        <div className={icon}>
          <SearchIcon />
        </div>
        <div className={icon}>
          <FavoriteBorderIcon />
        </div>
      </div>
    </div>
  );
};

export default Product;
