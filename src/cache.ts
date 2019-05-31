export class Cache {
  private cacheMap = new Map<string, string>()

  set (name: string, rule: string) {
    this.cacheMap.set(name, rule)
  }

  delete (name: string) {
    this.cacheMap.delete(name)
  }

  has (name: string) {
    this.cacheMap.has(name)
  }
}