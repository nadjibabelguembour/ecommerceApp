import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import Badge from "@mui/material/Badge";
import CartContext from "../../store/CartContext";
import { useContext } from "react";

const ShoppingCartButton = () => {

  const cartCtx = useContext(CartContext)

  return (
    <Badge badgeContent={cartCtx.products.length} color="primary">
      <ShoppingCartIcon color="action" />
    </Badge>
  );
};

export default ShoppingCartButton;
