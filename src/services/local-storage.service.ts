const getDataFromLocalStorage = <T>(key: string): T | null => {
  try {
    const data = localStorage.getItem(key);
    return data ? (JSON.parse(data) as T) : null;
  } catch (error) {
    console.error(`Failed to load data from localStorage for key ${key}`, error);
    return null;
  }
};

const setDataToLocalStorage = <T>(key: string, value: T): void => {
  try {
    const data = JSON.stringify(value);
    localStorage.setItem(key, data);
  } catch (error) {
    console.error(`Failed to save data to localStorage for key ${key}`, error);
  }
};

const removeDataFromLocalStorage = (key: string): void => {
  try {
    localStorage.removeItem(key);
  } catch (error) {
    console.error(`Failed to remove data from localStorage for key ${key}`, error);
  }
};

export { getDataFromLocalStorage, setDataToLocalStorage, removeDataFromLocalStorage };
