import { Product, ProductsResponse } from "@domain/interfaces/product.interface";

export function getProductsMapper(products: ProductsResponse): Product[] {
  return products.products.map((product) => {
    return {
      id: product.id,
      title: product.title,
      description: product.description,
      category: product.category,
      price: product.price,
      rating: product.rating,
      stock: product.stock,
      tags: product.tags,
      brand: product.brand ?? "",
      images: product.images,
      thumbnail: product.thumbnail,
    };
  });
}
