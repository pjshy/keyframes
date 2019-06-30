import * as CSS from 'csstype'
import { prefix } from 'inline-style-prefixer'

export function serializeStyle (style: CSS.Properties) {
  const properties = prefix(Object.keys(style)) as Array<keyof CSS.Properties>
  
  const css = properties.map((property) => {
    const val = `${style[property]}`.trim()
    return `${property}: ${val};`
  }).join('')

  return `{${css}}`
}