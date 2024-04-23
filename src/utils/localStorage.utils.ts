const addToLocalStorage = (key: string, value: string): void => {
  localStorage.setItem(key, value);
};

const getFromLocalStorage = (key: string): string | null => localStorage.getItem(key);

const removeFromLocalStorage = (key: string): void => {
  localStorage.removeItem(key);
};

const isInLocalStorage = (key: string): boolean => !!localStorage.getItem(key);

const clearLocalStorage = (): void => localStorage.clear();

export default {
  addToLocalStorage,
  getFromLocalStorage,
  removeFromLocalStorage,
  isInLocalStorage,
  clearLocalStorage,
};
