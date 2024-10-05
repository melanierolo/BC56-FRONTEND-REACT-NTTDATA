export function filterProducts(products, searchTerm) {
  return products.filter((product) => {
    const productTitle = product.title ?? "";
    const productBrand = product.brand ?? "";
    const matchesTitleOrBrand =
      productTitle.toLowerCase().includes(searchTerm.toLowerCase()) ||
      productBrand.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesTitleOrBrand;
  });
}
