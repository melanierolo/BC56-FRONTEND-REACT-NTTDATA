const API_PUBLIC = "https://dummyjson.com";

export async function getProducts() {
  const response = await fetch(`${API_PUBLIC}/products`);
  if (!response.ok) {
    throw new Error("Failed to fetch products");
  }
  const data = await response.json();
  return data.products;
}

export async function getCategories() {
  const response = await fetch(`${API_PUBLIC}/products/categories`);
  if (!response.ok) {
    throw new Error("Failed to fetch products");
  }
  const data = await response.json();

  return data;
}
