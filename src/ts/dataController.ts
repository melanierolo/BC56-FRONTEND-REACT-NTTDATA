import { Product } from './interfaces';
export function filterProducts(
  products: Product[],
  searchTerm: string,
): Product[] {
  return products.filter((product) => {
    const productTitle = product.title ?? '';
    const productBrand = product.brand ?? '';
    const isTitleOrBrandMatching =
      productTitle.toLowerCase().includes(searchTerm.toLowerCase()) ||
      productBrand.toLowerCase().includes(searchTerm.toLowerCase());

    return isTitleOrBrandMatching;
  });
}
