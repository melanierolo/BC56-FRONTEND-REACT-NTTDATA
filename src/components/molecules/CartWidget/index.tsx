import { FC, useEffect, useState } from "react";
import shoppingCartIcon from "@assets/icons/shopping-cart-icon.svg";

import "./style.css";

const CartWidget: FC = () => {
  const [cartCount, setCartCount] = useState<number>(0);

  const updateCartCount = () => {
    const getCount = localStorage.getItem("product-count")?.toString() || "0";
    const newCount = parseInt(getCount, 10);
    setCartCount(newCount);
  };

  useEffect(() => {
    updateCartCount();

    const handleCartCountUpdate = (event: Event) => {
      const customEvent = event as CustomEvent<number>;
      setCartCount(customEvent.detail);
    };

    window.addEventListener("cartCountUpdated", handleCartCountUpdate as EventListener);

    return () => {
      window.removeEventListener("cartCountUpdated", handleCartCountUpdate as EventListener);
    };
  }, []);

  return (
    <div className="shopping">
      <div className="shopping__link">
        <img className="shopping__icon" src={shoppingCartIcon} alt="icon shopping cart"></img>
      </div>
      <div className="shopping__number-products">
        <p className="shopping__products-count">
          <strong className="product-count">{cartCount}</strong>
        </p>
      </div>
    </div>
  );
};
export default CartWidget;
