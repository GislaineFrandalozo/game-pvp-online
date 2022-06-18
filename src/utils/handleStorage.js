class handleStorage {

  static set(key, value) {
    return localStorage.setItem(key, value)
  }

  static get(key) {
    return localStorage.getItem(key)
  }

  static clearLocalStorage() {
    localStorage.clear()
  }

  static setObject(key, object) {
    localStorage.setItem(
      key,
      JSON.stringify(object)
    );
  }
  static getObject(key) {
    const dataObject = localStorage.getItem(key)
    return JSON.parse(dataObject)
  }
}

export { handleStorage }
