import { Product } from "@domain/interfaces/product.interface";

export function filterProducts(
  products: Product[],
  searchTerm: string,
  selectedCategory: string,
): Product[] {
  return products.filter((product) => {
    const productTitle = product.title ?? "";
    const productBrand = product.brand ?? "";
    const isTitleOrBrandMatching =
      productTitle.toLowerCase().includes(searchTerm.toLowerCase()) ||
      productBrand.toLowerCase().includes(searchTerm.toLowerCase());
    const isCategoryMaching = selectedCategory
      ? product.category === selectedCategory.toLowerCase()
      : true;
    return isTitleOrBrandMatching && isCategoryMaching;
  });
}
