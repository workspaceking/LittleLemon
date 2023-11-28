const LocalStorage = {
  set: (name, value) => {
    localStorage.setItem(name, value);
    return LocalStorage.get(name) === value;
  },
  get: (name) => localStorage.getItem(name),
  remove: (name) => localStorage.removeItem(name),
  clear: () => localStorage.clear(),
  length: () => localStorage.length,
};

export default LocalStorage;
