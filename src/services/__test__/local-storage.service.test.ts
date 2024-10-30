import {
  getDataFromLocalStorage,
  setDataToLocalStorage,
  removeDataFromLocalStorage,
} from "@services/local-storage.service";

describe("localStorageUtils", () => {
  const key = "testKey";
  const value = { name: "test" };

  beforeEach(() => {
    localStorage.clear();
    jest.clearAllMocks();
  });

  describe("getDataFromLocalStorage", () => {
    it("should return parsed data from localStorage", () => {
      localStorage.setItem(key, JSON.stringify(value));
      const result = getDataFromLocalStorage<typeof value>(key);
      expect(result).toEqual(value);
    });

    it("should return null if no data is found", () => {
      const result = getDataFromLocalStorage<typeof value>(key);
      expect(result).toBeNull();
    });

    it("should return null and log an error if JSON parsing fails", () => {
      console.error = jest.fn();
      localStorage.setItem(key, "invalid JSON");
      const result = getDataFromLocalStorage<typeof value>(key);
      expect(result).toBeNull();
      expect(console.error).toHaveBeenCalledWith(
        `Failed to load data from localStorage for key ${key}`,
        expect.any(SyntaxError),
      );
    });
  });

  describe("setDataToLocalStorage", () => {
    it("should save data to localStorage", () => {
      setDataToLocalStorage(key, value);
      const storedData = localStorage.getItem(key);
      expect(storedData).toEqual(JSON.stringify(value));
    });

    it("should log an error if JSON stringification fails", () => {
      console.error = jest.fn();
      const circularReference: any = {};
      circularReference.myself = circularReference; // create a circular reference
      try {
        JSON.stringify(circularReference);
      } catch (error) {
        setDataToLocalStorage(key, circularReference);
        expect(console.error).toHaveBeenCalledWith(
          `Failed to save data to localStorage for key ${key}`,
          expect.any(TypeError),
        );
      }
    });
  });

  describe("removeDataFromLocalStorage", () => {
    it("should remove data from localStorage", () => {
      localStorage.setItem(key, JSON.stringify(value));
      removeDataFromLocalStorage(key);
      const storedData = localStorage.getItem(key);
      expect(storedData).toBeNull();
    });

    it("should log an error if removing data fails", () => {
      console.error = jest.fn();
      // Simulate an error by spying on localStorage.removeItem and throwing an error
      jest.spyOn(Storage.prototype, "removeItem").mockImplementation(() => {
        throw new Error("Failed to remove item");
      });
      removeDataFromLocalStorage(key);
      expect(console.error).toHaveBeenCalledWith(
        `Failed to remove data from localStorage for key ${key}`,
        expect.any(Error),
      );
    });
  });
});
