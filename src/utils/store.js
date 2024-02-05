const store = {
  setLocalStorage(key, item) {
    localStorage.setItem(key, JSON.stringify(item));
  },

  getLocalStorage(key) {
    const data = localStorage.getItem(key);

    if (data) {
      try {
        return JSON.parse(data);
      } catch {
        return [];
      }
    }
  },
};

export default store;
