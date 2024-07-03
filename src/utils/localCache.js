class LocaleCache {
  static setCache(key, value) {
    localStorage.setItem(key, JSON.stringify(value))
  }
  static getCache(key) {
    let cacheValue = localStorage.getItem(key)
    return cacheValue ? JSON.parse(cacheValue) : null
  }
  static removeCache(key) {
    localStorage.removeItem(key)
  }
  static clearCache() {
    localStorage.clear()
  }
}
export default LocaleCache
