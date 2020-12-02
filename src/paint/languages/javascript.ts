const javascript = {
  tokens: {
    'period': {
      match: '.'
    },
    'left-parenthesis': {
      match: '('
    },
    'right-parenthesis': {
      match: ')'
    },
    'string': {
      match: /(?:"[^"\n]*")|(?:'[^'\n]*')/
    },
    'comma': {
      match: ','
    },
    'semicolon': {
      match: ';'
    },
    'keyword': {
      match: /const|var|let|for|while|function|return|if|typeof|new/
    },
    'identifier': {
      match: /^[a-zA-Z_][a-zA-Z_0-9]*/
    },
    'number': {
      match: /^[0-9]+/
    },
    'colon': {
      match: ':'
    },
    'arrow': {
      match: '=>'
    },
    'eeeq': {
      match: '==='
    },
    'eeq': {
      match: '=='
    },
    'eq': {
      match: '='
    },
    'not': {
      match: '!'
    },
    'and': {
      match: '&&'
    },
    'bitwise-and': {
      match: '&'
    },
    'or': {
      match: '||'
    },
    'bitwise-or': {
      match: '|'
    },
    'less-than-or-equal': {
      match: '<='
    },
    'less-than': {
      match: '<'
    },
    'greater-than-or-equal': {
      match: '>='
    },
    'greater-than': {
      match: '>'
    },
    'question-mark': {
      match: '?'
    },
    'comment': {
      match: /\/\/[^\n]*\n/
    }
  },
  token_groupings: {
    'punctuation': [
      'period',
      'left-parenthesis',
      'right-parenthesis',
      'semicolon',
      'colon',
      'comma'
    ],
    'operator': [
      'colon',
      'arrow',
      'eq',
      'eeq',
      'eeeq',
      'not',
      'bitwise-and',
      'and',
      'bitwise-or',
      'or',
      'less-than',
      'greater-than',
      'less-than-or-equal',
      'greater-than-or-equal',
      'question-mark'
    ],
    'constant': [
      'number'
    ],
    'special': [
      'keyword:new'
    ]
  }
};
export default javascript;