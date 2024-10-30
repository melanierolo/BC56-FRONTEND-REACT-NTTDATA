import { getCategories } from "@services/category.service";
import { categoriesMock, categoriesApiResponseMock } from "@root/__mocks__/category.mock";

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

describe("getCategories", () => {
  beforeEach(() => {
    global.fetch = jest.fn();
  });

  afterEach(() => {
    jest.resetAllMocks();
  });

  it("should fetch and map categories correctly", async () => {
    (global.fetch as jest.Mock) = mockFetch(categoriesApiResponseMock);

    const result = await getCategories();

    expect(global.fetch).toHaveBeenCalledWith("https://dummyjson.com/products/categories");
    expect(result).toEqual(categoriesMock);
  });

  it("should throw an error if fetch fails", async () => {
    (global.fetch as jest.Mock) = mockFetch({}, 500, false);

    await expect(getCategories()).rejects.toThrow("An error occurred while fetching categories");
  });
});
