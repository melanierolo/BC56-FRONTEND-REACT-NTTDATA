import { createContext } from "react";

import { CartItem } from "@root/store/cart/cartReducer";
import { Product } from "@domain/interfaces/product.interface";

interface CartContextType {
  cart: CartItem[];
  totalItems: number;
  addProduct: (item: Product, quantityOfItems: number) => void;
  decreaseProduct: (id: number) => void;
  removeProduct: (id: number) => void;
}

const CartContext = createContext<CartContextType>({
  cart: [],
  totalItems: 0,
  addProduct: () => {},
  decreaseProduct: () => {},
  removeProduct: () => {},
});

export default CartContext;
