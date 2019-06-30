export type StyleString = string & { kind?: 'StyleString' }

class Cache {
  private registered: {[key: string]: StyleString} = {}

  get (key: string) {
    return this.registered[key] || ''
  }

  set (key: string, style: StyleString) {
    this.registered[key] = style
  }
}

export const cache = new Cache()