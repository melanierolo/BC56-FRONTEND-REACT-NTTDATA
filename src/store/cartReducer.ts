import { Product } from "@domain/interfaces/product.interface";
import {
  CartActionTypes,
  ADD_PRODUCT,
  DECREASE_PRODUCT,
  REMOVE_PRODUCT,
} from "@root/store/cartActions";

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
    case ADD_PRODUCT:
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

    case DECREASE_PRODUCT:
      const productToDecrease = state.cart.find((product) => product.item.id === action.payload.id);

      if (productToDecrease) {
        const updatedQuantity = productToDecrease.quantityOfItems - 1;
        if (updatedQuantity >= 0) {
          const updatedCart = state.cart.map((product) =>
            product.item.id === action.payload.id
              ? {
                  ...product,
                  quantityOfItems: updatedQuantity,
                }
              : product,
          );

          return { ...state, cart: updatedCart, totalItems: state.totalItems - 1 };
        }
      } else {
        return {
          ...state,
          cart: state.cart.filter((product) => product.item.id !== action.payload.id),
          totalItems: state.totalItems - 1,
        };
      }
      return state;

    case REMOVE_PRODUCT:
      const productToRemove = state.cart.find((product) => product.item.id === action.payload.id);
      if (productToRemove) {
        const updatedCart = state.cart.filter((product) => product.item.id !== action.payload.id);
        return {
          ...state,
          cart: updatedCart,
          totalItems: state.totalItems - productToRemove.quantityOfItems,
        };
      }
      return state;

    default:
      return state;
  }
};
