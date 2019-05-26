import * as CSS from 'csstype'

import { serializeStyle } from './css'
import { hashString } from 'hash'
import { applyStyleRule } from './dom'

type KeyframesRule = {
  [key: string]: CSS.Properties,
  from: CSS.Properties,
  to: CSS.Properties,
}

export function keyframes (rule: KeyframesRule | string) {
  const hash = hashString(typeof rule === 'object' ? JSON.stringify(rule) : `${rule}`)
  const animationName = `animation-${hash}`
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

  applyStyleRule(chunks.join())
  /**
   * @todo cache
   * @body design a cache for same rule
   */
}