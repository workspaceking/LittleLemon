const LocalStorage = {
  set: (name, value) => {
    localStorage.setItem(name, value);
    return LocalStorage.get(name) === value;
  },
  get: (name) => localStorage.getItem(name),
  removeCart: () => {
    const storage = localStorage.getItem('store');
    const { cart, ...rest } = JSON.parse(storage);
    localStorage.clear();
    localStorage.setItem('store', JSON.stringify(rest));
    console.log('rest', rest);
    console.log('localStorage', localStorage.getItem('store'));
  },
  delete: (name) => localStorage.removeItem(name),
  clear: () => localStorage.clear(),
  length: () => localStorage.length,
};

export default LocalStorage;
