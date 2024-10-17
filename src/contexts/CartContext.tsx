import { createContext, useReducer, useEffect, FC, ReactNode } from "react";
import { cartReducer } from "@root/store/cartReducer";
import {
  addProductAction,
  decreaseProductAction,
  removeProductAction,
} from "@root/store/cartActions";
import { CartItem } from "@root/store/cartReducer";
import { Product } from "@domain/interfaces/product.interface";

interface CartContextType {
  cart: CartItem[];
  totalItems: number;
  addProduct: (item: Product, quantityOfItems: number) => void;
  decreaseProduct: (id: number) => void;
  removeProduct: (id: number) => void;
}

export const CartContext = createContext<CartContextType>({
  cart: [],
  totalItems: 0,
  addProduct: () => {},
  decreaseProduct: () => {},
  removeProduct: () => {},
});

export const CartProvider: FC<{ children: ReactNode }> = ({ children }) => {
  const initialFromLocalStorage = {
    cart: JSON.parse(localStorage.getItem("cart") || "[]"),
    totalItems: JSON.parse(localStorage.getItem("cartTotalItems") || "0"),
  };
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
    localStorage.setItem("cart", JSON.stringify(state.cart));
    localStorage.setItem("cartTotalItems", JSON.stringify(state.totalItems));
  }, [state.cart, state.totalItems]);

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
