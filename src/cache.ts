export class Cache {
  private cacheMap = new Map<string, string>()

  set (name: string, rule: string) {
    return this.cacheMap.set(name, rule)
  }

  delete (name: string) {
    return this.cacheMap.delete(name)
  }

  has (name: string) {
    return this.cacheMap.has(name)
  }
}