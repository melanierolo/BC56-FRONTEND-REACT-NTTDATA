import { Category } from "@domain/interfaces/category.interface";
import { getCategoriesMapper } from "@mappers/category.mapper";

const API_PUBLIC = "https://dummyjson.com";

export async function getCategories(): Promise<Category[]> {
  try {
    const response = await fetch(`${API_PUBLIC}/products/categories`);
    if (!response.ok) {
      throw new Error("Failed to fetch categories");
    }
    const categories = await response.json();
    return getCategoriesMapper(categories);
  } catch {
    throw new Error("Categories not found");
  }
}
