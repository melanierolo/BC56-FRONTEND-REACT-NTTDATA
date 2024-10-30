import { FC, ReactNode, useReducer, useEffect } from "react";
import CartContext from "./CartContext";
import { cartReducer } from "@root/store/cart/cartReducer";
import {
  addProductAction,
  decreaseProductAction,
  removeProductAction,
} from "@root/store/cart/cartActions";
import { Product } from "@domain/interfaces/product.interface";
import { setDataToLocalStorage } from "@services/local-storage.service";

const initialFromLocalStorage = {
  cart: JSON.parse(localStorage.getItem("cart") || "[]"),
  totalItems: JSON.parse(localStorage.getItem("cartTotalItems") || "0"),
};

const CartProvider: FC<{ children: ReactNode }> = ({ children }) => {
  const [state, dispatch] = useReducer(cartReducer, initialFromLocalStorage);

  const addProduct = (item: Product, quantityOfItems: number) => {
    dispatch(addProductAction(item, quantityOfItems));
  };

  const decreaseProduct = (id: number) => {
    dispatch(decreaseProductAction(id));
  };

  const removeProduct = (id: number) => {
    dispatch(removeProductAction(id));
  };

  useEffect(() => {
    setDataToLocalStorage("cart", state.cart);
    setDataToLocalStorage("cartTotalItems", state.totalItems);
  }, [state.totalItems]);

  return (
    <CartContext.Provider
      value={{
        cart: state.cart,
        totalItems: state.totalItems,
        addProduct,
        decreaseProduct,
        removeProduct,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export { CartProvider };
