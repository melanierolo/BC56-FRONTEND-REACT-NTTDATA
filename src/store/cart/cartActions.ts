import { Product } from "@domain/interfaces/product.interface";

export const ADD_PRODUCT = "ADD_PRODUCT";
export const DECREASE_PRODUCT = "DECREASE_PRODUCT";
export const REMOVE_PRODUCT = "REMOVE_PRODUCT";

interface AddProductAction {
  type: typeof ADD_PRODUCT;
  payload: { item: Product; itemQuantity: number };
}

interface DecreaseProductAction {
  type: typeof DECREASE_PRODUCT;
  payload: { id: number };
}

interface RemoveProductAction {
  type: typeof REMOVE_PRODUCT;
  payload: { id: number };
}

export type CartActionTypes = AddProductAction | DecreaseProductAction | RemoveProductAction;

export const addProductAction = (item: Product, itemQuantity: number): AddProductAction => ({
  type: ADD_PRODUCT,
  payload: { item, itemQuantity },
});

export const decreaseProductAction = (id: number): DecreaseProductAction => ({
  type: DECREASE_PRODUCT,
  payload: { id },
});

export const removeProductAction = (id: number): RemoveProductAction => ({
  type: REMOVE_PRODUCT,
  payload: { id },
});
