import { getProducts } from "@services/product.service";
import { mockProducts } from "@root/__mocks__/product.mocks";

const mockFetch = (data: unknown, status = 200, ok = true): jest.Mock => {
  return jest.fn().mockImplementationOnce(() => {
    return Promise.resolve({
      json: () => Promise.resolve(data),
      status,
      ok,
      text: () => Promise.resolve(data),
    });
  });
};

describe("getProducts", () => {
  beforeEach(() => {
    global.fetch = jest.fn();
  });

  afterEach(() => {
    jest.resetAllMocks();
  });

  it("should fetch and map products correctly", async () => {
    (global.fetch as jest.Mock) = mockFetch({ products: mockProducts });

    const result = await getProducts();

    expect(global.fetch).toHaveBeenCalledWith("https://dummyjson.com/products");
    expect(result).toEqual(mockProducts);
  });

  it("should throw an error if fetch fails", async () => {
    (global.fetch as jest.Mock) = mockFetch({}, 500, false);

    await expect(getProducts()).rejects.toThrow("An error occurred while fetching products");
  });
});
