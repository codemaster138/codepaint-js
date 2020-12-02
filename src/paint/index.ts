import languages, { Language } from './languages';
import { tokenize } from './lexer';
import Token from './token';

function associations(token: Token, groupings: { [key: string]: string[] }): string[] {
  let res: string[] = [];
  Object.keys(groupings).forEach(group => {
    if (groupings[group].includes(token.type)) res.push(group);
  });
  return res;
}

function stringifyTokens(tokens: Token[], l: Language) {
  return tokens.map(token => `<span class="token ${token.type}${[''].concat(associations(token, l.token_groupings)).join(' ')}">${token.value}</span>`).join('');
}

export function generateFromHTML(element: HTMLElement, language?: string | Language): string {
  const l = (!language || typeof language === 'string')
    ? languages[language || 'javascript']
    : language;
  if (!l) return element.innerText;

  const text = element.innerText;
  const tokens = tokenize(text, l.tokens);

  return stringifyTokens(tokens, l);
}

export function generateFromText(text: string, language?: string | Language) {
  const l = (!language || typeof language === 'string')
    ? languages[language || 'javascript']
    : language;
  if (!l) return text;

  const tokens = tokenize(text, l.tokens);

  return stringifyTokens(tokens, l);
}