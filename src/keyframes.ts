import * as CSS from 'csstype'

import { serializeStyle } from 'css'
import { hashString } from 'hash'
import { applyStyleRules } from 'dom'
import { Cache } from 'cache'

const cache = new Cache()

export type KeyframesRule = {
  [key: string]: CSS.Properties,
  from: CSS.Properties,
  to: CSS.Properties,
}

export function keyframes (rule: KeyframesRule | string, withCache = true) {
  const hash = hashString(typeof rule === 'object' ? JSON.stringify(rule) : `${rule}`)
  const animationName = `animation-${hash}`

  if (withCache && cache.has(animationName)) {
    return animationName
  }

  const chunks: string[] = [`@keyframes ${animationName} {`]

  if (typeof rule === 'object') {
    const selectors = Object.keys(rule)

    selectors.forEach((selector) => {
      const style = serializeStyle(rule[selector])

      chunks.push(`${selector}: ${style}`)
    })
  } else {
    chunks.push(rule)
  }

  chunks.push('}')

  applyStyleRules([chunks.join('')])

  return animationName
}