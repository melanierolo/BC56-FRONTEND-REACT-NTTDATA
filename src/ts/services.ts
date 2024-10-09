import { Product, CategoryFilter } from './interfaces';
import { getProductsMapper } from './mappers';

const API_PUBLIC = 'https://dummyjson.com';

export async function getProducts(): Promise<Product[]> {
  try {
    const response = await fetch(`${API_PUBLIC}/products`);
    if (!response.ok) {
      throw new Error('Failed to fetch products');
    }
    const products = await response.json();
    return getProductsMapper(products);
  } catch {
    throw new Error('Product not found');
  }
}

export async function getCategories(): Promise<CategoryFilter[]> {
  try {
    const response = await fetch(`${API_PUBLIC}/products/categories`);
    if (!response.ok) {
      throw new Error('Failed to fetch products');
    }
    const categories = await response.json();
    return categories;
  } catch {
    throw new Error('Product not found');
  }
}

export function addProductToCart(): number {
  const currentCount = parseInt(
    localStorage.getItem('product-count') || '0',
    10,
  );
  const newCount = currentCount + 1;
  localStorage.setItem('product-count', newCount.toString());
  return newCount;
}
