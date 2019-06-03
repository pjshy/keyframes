import * as CSS from 'csstype'

import { serializeStyle } from 'css'
import { hashString } from 'hash'
import { applyStyleRules } from 'dom'

export type KeyframesRule = {
  [key: string]: CSS.Properties,
  from: CSS.Properties,
  to: CSS.Properties,
}

export function keyframes (rule: KeyframesRule | string) {
  const hash = hashString(typeof rule === 'object' ? JSON.stringify(rule) : `${rule}`)
  const animationName = `animation-${hash}`

  let serialized = ''

  if (typeof rule === 'object') {
    const selectors = Object.keys(rule)

    serialized = selectors.map((selector) => {
      const style = serializeStyle(rule[selector])
      return `${selector}: ${style}`
    }).join('')
  } else {
    serialized = rule
  }

  applyStyleRules(animationName, [serialized])

  return animationName
}