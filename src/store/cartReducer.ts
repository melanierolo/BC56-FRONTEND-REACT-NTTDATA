import { Product } from "@domain/interfaces/product.interface";
import { CartActionTypes, ADD_PRODUCT } from "@root/store/cartActions";

export interface CartItem {
  item: Product;
  quantityOfItems: number;
}

interface CartState {
  cart: CartItem[];
  totalItems: number;
}

const initialCartState: CartState = {
  cart: JSON.parse(localStorage.getItem("cart") || "[]"),
  totalItems: JSON.parse(localStorage.getItem("cartTotalItems") || "0"),
};

export const cartReducer = (
  state: CartState = initialCartState,
  action: CartActionTypes,
): CartState => {
  switch (action.type) {
    case ADD_PRODUCT: {
      const existingProduct = state.cart.find(
        (product) => product.item.id === action.payload.item.id,
      );
      if (existingProduct) {
        const updatedCart = state.cart.map((product) =>
          product.item.id === action.payload.item.id
            ? {
                ...product,
                quantityOfItems: product.quantityOfItems + 1,
              }
            : product,
        );
        return {
          ...state,
          cart: updatedCart,
          totalItems: state.totalItems + 1,
        };
      } else {
        return {
          ...state,
          cart: [
            ...state.cart,
            { item: action.payload.item, quantityOfItems: action.payload.itemQuantity },
          ],
          totalItems: state.totalItems + 1,
        };
      }
    }
    default:
      return state;
  }
};
