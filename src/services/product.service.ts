import { Product } from "@domain/interfaces/product.interface";
import { getProductsMapper } from "@mappers/product.mapper";

const API_PUBLIC = "https://dummyjson.com";

export async function getProducts(): Promise<Product[]> {
  try {
    const response = await fetch(`${API_PUBLIC}/products`);
    if (!response.ok) {
      throw new Error("Failed to fetch products");
    }
    const products = await response.json();
    return getProductsMapper(products);
  } catch {
    throw new Error("Product not found");
  }
}