import { filterProducts } from "@root/helpers/filter-producs.helpers";
import { mockProducts } from "@root/__mocks__/product.mocks";

describe("filterProducts", () => {
  it("should filter products by search term", () => {
    const result = filterProducts(mockProducts, "Lipstick", "");
    expect(result).toEqual([mockProducts[0]]);
  });

  it("should filter products by category", () => {
    const result = filterProducts(mockProducts, "", "beauty");
    expect(result).toEqual([mockProducts[0], mockProducts[1]]);
  });

  it("should filter products by search term and category", () => {
    const result = filterProducts(mockProducts, "Nail", "beauty");
    expect(result).toEqual([mockProducts[1]]);
  });

  it("should return all products if search term and category are empty", () => {
    const result = filterProducts(mockProducts, "", "");
    expect(result).toEqual(mockProducts);
  });

  it("should return an empty array if no products match the search term and category", () => {
    const result = filterProducts(mockProducts, "Nonexistent", "nonexistent");
    expect(result).toEqual([]);
  });
});
