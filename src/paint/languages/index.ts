import javascript from './javascript';

export interface TokenRule {
  match: RegExp;
}

export interface Language {
  tokens: {
    [ key: string]: TokenRule;
  };
  token_groupings: { [key: string]: string[] };
}

const languages: { [ key: string ]: Language} = {
  javascript,
  js: javascript
};

export default languages;