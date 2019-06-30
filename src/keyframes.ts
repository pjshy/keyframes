import * as CSS from 'csstype'

import { serializeStyle } from 'css'
import { hashString } from 'hash'
import { applyStyleRules } from 'dom'
import { cache, StyleString } from 'cache'

export type KeyframesRule = {
  [key: string]: CSS.Properties,
  from: CSS.Properties,
  to: CSS.Properties,
}

export function keyframes (rule: KeyframesRule) {
  const hash = hashString(JSON.stringify(rule))
  const animationName = `animation-${hash}`

  const cachedStyle = cache.get(animationName)

  if (cachedStyle) {
    return cachedStyle
  }

  let serialized = ''

  const keywords = Object.keys(rule)

  serialized = keywords.map((keyword) => {
    const style = serializeStyle(rule[keyword])
    return `${keyword} ${style}`
  }).join('')

  const styleRule: StyleString = `${animationName} {${serialized}}`

  applyStyleRules([styleRule])

  cache.set(animationName, styleRule)

  return animationName
}
