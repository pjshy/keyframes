export const isBrowser = !!document

export function applyStyleRule (rule: string) {
  if (isBrowser) {
    const style = document.createElement('style')

    document.getElementsByTagName('head')[0].appendChild(style)

    const styleSheet = document.styleSheets[document.styleSheets.length - 1] as CSSStyleSheet

    if (typeof styleSheet.insertRule === 'function') {
      styleSheet.insertRule(rule, styleSheet.rules.length)
    } else {
      /**
       * @todo polyfill for IE
       */
    }
  }
}