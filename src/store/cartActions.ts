import { Product } from "@domain/interfaces/product.interface";

export const ADD_PRODUCT = "ADD_PRODUCT";

interface AddProductAction {
  type: typeof ADD_PRODUCT;
  payload: { item: Product; itemQuantity: number };
}

export type CartActionTypes = AddProductAction;

export const addProductAction = (item: Product, itemQuantity: number): AddProductAction => ({
  type: ADD_PRODUCT,
  payload: { item, itemQuantity },
});
