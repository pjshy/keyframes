import * as CSS from 'csstype'

export function serializeStyle (style: CSS.Properties) {
  const chunks: string[] = ['{']
  const properties = Object.keys(style) as Array<keyof CSS.Properties>
  
  properties.forEach((property) => {
    const val = `${style[property]}`.trim() + ';'

    chunks.push(`${property}: ${val}`)
  })

  chunks.push('}')

  return chunks.join('')
}