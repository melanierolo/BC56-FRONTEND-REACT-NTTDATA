import { Product } from "@domain/interfaces/product.interface";
import {
  CartActionTypes,
  ADD_PRODUCT,
  DECREASE_PRODUCT,
  REMOVE_PRODUCT,
} from "@root/store/cart/cartActions";
import {
  getDataFromLocalStorage,
  setDataToLocalStorage,
} from "@root/services/local-storage.service";

export interface CartItem {
  item: Product;
  quantityOfItems: number;
}

interface CartState {
  cart: CartItem[];
  totalItems: number;
}

const initialCartState: CartState = {
  cart: getDataFromLocalStorage<CartItem[]>("cart") || [],
  totalItems: getDataFromLocalStorage<number>("cartTotalItems") || 0,
};

const updateLocalStorage = (cart: CartItem[], totalItems: number) => {
  setDataToLocalStorage("cart", cart);
  setDataToLocalStorage("cartTotalItems", totalItems);
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
        const updatedCart = state.cart.map((product) => {
          if (product.item.id === action.payload.item.id) {
            return {
              ...product,
              quantityOfItems: product.quantityOfItems + 1,
            };
          } else {
            return product;
          }
        });
        setDataToLocalStorage("cart", updatedCart);
        setDataToLocalStorage("cartTotalItems", state.totalItems + 1);
        return {
          ...state,
          cart: updatedCart,
          totalItems: state.totalItems + 1,
        };
      } else {
        const newCart = [
          ...state.cart,
          { item: action.payload.item, quantityOfItems: action.payload.itemQuantity },
        ];
        setDataToLocalStorage("cart", newCart);
        setDataToLocalStorage("cartTotalItems", state.totalItems + 1);
        return {
          ...state,
          cart: newCart,
          totalItems: state.totalItems + 1,
        };
      }

    case DECREASE_PRODUCT: {
      const updatedCart: CartItem[] = [];
      let newTotalItems = state.totalItems;

      for (const product of state.cart) {
        if (product.item.id === action.payload.id) {
          if (product.quantityOfItems > 1) {
            updatedCart.push({ ...product, quantityOfItems: product.quantityOfItems - 1 });
          }
          newTotalItems -= 1;
        } else {
          updatedCart.push(product);
        }
      }

      updateLocalStorage(updatedCart, newTotalItems);

      return { cart: updatedCart, totalItems: newTotalItems };
    }

    case REMOVE_PRODUCT:
      const productToRemove = state.cart.find((product) => product.item.id === action.payload.id);
      if (!productToRemove) return state;

      const updatedCart = state.cart.filter((product) => product.item.id !== action.payload.id);
      const newTotalItems = state.totalItems - productToRemove.quantityOfItems;
      updateLocalStorage(updatedCart, newTotalItems);

      return { cart: updatedCart, totalItems: newTotalItems };

    default:
      return state;
  }
};
