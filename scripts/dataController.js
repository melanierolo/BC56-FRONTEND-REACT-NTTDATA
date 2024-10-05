export function filterProducts(products, searchTerm, selectedCategory) {
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

export function populateCategories(categories) {
  const categoryList = document.getElementById("categories");
  while (categoryList.firstChild) {
    categoryList.removeChild(categoryList.firstChild);
  }
  categories.forEach((category) => {
    const option = document.createElement("option");
    option.value = category.name;
    categoryList.appendChild(option);
  });
}
