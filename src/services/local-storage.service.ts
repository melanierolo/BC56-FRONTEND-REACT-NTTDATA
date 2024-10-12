export function addProductToCart(): number {
  const currentCount = parseInt(localStorage.getItem("product-count") || "0", 10);
  const newCount = currentCount + 1;
  localStorage.setItem("product-count", newCount.toString());
  return newCount;
}
