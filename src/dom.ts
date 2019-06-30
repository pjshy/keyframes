import { IS_BROWSER, STYLE_ID } from "constant"

export function applyStyleRules (rules: string[]) {
  if (IS_BROWSER) {
    let styleTag = document.querySelector<HTMLStyleElement>(`#${STYLE_ID}`);

    if (!styleTag) {
      styleTag = document.createElement("style");
      styleTag.id = STYLE_ID;
      document.getElementsByTagName("head")[0].appendChild(styleTag);
    }

    const sheet = styleTag.sheet as CSSStyleSheet;

    if (sheet.insertRule) {
      rules.reduce((index, rule) => {
        try {
          sheet.insertRule(rule, index);
        } catch (e) {
          console.warn(`The ${rule} wasn't compatible in the browser`);
        }

        return index + 1;
      }, sheet.cssRules.length);
    } else {
      styleTag.innerText = (styleTag.innerHTML || "") + rules.join("");
    }
  }
}
