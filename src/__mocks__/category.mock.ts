import { Category, CategoryResponse } from "@domain/interfaces/category.interface";

export const categoriesMock: Category[] = [
  { value: "beauty", label: "Beauty" },
  { value: "fragrances", label: "Fragrances" },
  { value: "furniture", label: "Furniture" },
  { value: "groceries", label: "Groceries" },
  { value: "home-decoration", label: "Home Decoration" },
  { value: "kitchen-accessories", label: "Kitchen Accessories" },
  { value: "laptops", label: "Laptops" },
];

export const categoriesApiResponseMock: CategoryResponse[] = [
  { slug: "beauty", name: "Beauty", url: "https://dummyjson.com/products/category/beauty" },
  {
    slug: "fragrances",
    name: "Fragrances",
    url: "https://dummyjson.com/products/category/fragrances",
  },
  {
    slug: "furniture",
    name: "Furniture",
    url: "https://dummyjson.com/products/category/furniture",
  },
  {
    slug: "groceries",
    name: "Groceries",
    url: "https://dummyjson.com/products/category/groceries",
  },
  {
    slug: "home-decoration",
    name: "Home Decoration",
    url: "https://dummyjson.com/products/category/home-decoration",
  },
  {
    slug: "kitchen-accessories",
    name: "Kitchen Accessories",
    url: "https://dummyjson.com/products/category/kitchen-accessories",
  },
  { slug: "laptops", name: "Laptops", url: "https://dummyjson.com/products/category/laptops" },
];
