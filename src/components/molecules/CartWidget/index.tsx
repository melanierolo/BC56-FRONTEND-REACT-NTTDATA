import { FC } from "react";
import shoppingCartIcon from "@assets/icons/shopping-cart-icon.svg";
import { useContext } from "react";
import { CartContext } from "@root/contexts/CartContext";

import "./style.css";

const CartWidget: FC = () => {
  const { totalItems } = useContext(CartContext);

  return (
    <div className="shopping">
      <div className="shopping__link">
        <img className="shopping__icon" src={shoppingCartIcon} alt="icon shopping cart"></img>
      </div>
      <div className="shopping__number-products">
        <p className="shopping__products-count">
          <strong className="product-count">{totalItems}</strong>
        </p>
      </div>
    </div>
  );
};
export default CartWidget;
