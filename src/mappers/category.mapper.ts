import { Category, CategoryResponse } from "@domain/interfaces/category.interface";

export function getCategoriesMapper(categories: CategoryResponse[]): Category[] {
  return categories.map((category) => {
    return {
      value: category.slug,
      label: category.name,
    };
  });
}
