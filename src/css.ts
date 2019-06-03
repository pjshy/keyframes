import * as CSS from 'csstype'

export function serializeStyle (style: CSS.Properties) {
  const properties = Object.keys(style) as Array<keyof CSS.Properties>
  
  const css = properties.map((property) => {
    const val = `${style[property]}`.trim()
    return `${property}: ${val};`
  }).join('')

  return `{${css}}`
}