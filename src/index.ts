import { generateFromHTML, generateFromText } from './paint';

/**
 * Tokenize a *single* HTML element
 * @param element The HTML element or a selector pointing to the element to tokenize
 * @param async Whether to run asynchronously
 */
export function paint(element: string | HTMLPreElement | null, async?: boolean): Promise<void> | void {
  // If `element` is a selector, query it
  element = typeof element === 'string'
    ? document.querySelector<HTMLPreElement>(element)
    : element;
  // Make sure element is non-null
  if (element === null) return;

  // Make sure element has a `code` child
  if (!element.getElementsByTagName('code')) return;

  const f = (resolve: (...args: any[]) => void) => {
    if (typeof element === 'object' && element) element.getElementsByTagName('code')[0].innerHTML = generateFromHTML(element.getElementsByTagName('code')[0], element.dataset.lang || 'js');
    resolve();
  }

  return async
    ? new Promise(f)
    : f(() => { });
}

export function paintAll(elements: string | NodeListOf<HTMLPreElement>, async?: boolean) {
  // If `element` is a selector, query it
  elements = typeof elements === 'string'
    ? document.querySelectorAll<HTMLPreElement>(elements)
    : elements;
  elements.forEach(element => paint(element, async))
}

/**
 * Tokenize a string and return the tokenized string (or a promise resolving to the tokenized string if `async` is `true`)
 * @param string Source text
 * @param language What programming language is the source text written in?
 * @param async Whether to run asynchronously
 */
export function paintString(string: string, language?: string, async?: boolean): Promise<string> | string {
  const f = (resolve: Function) => {
    return resolve(generateFromText(string, language || 'js'));
  }
  return async
    ? new Promise(f)
    : f((html: string) => html)
}