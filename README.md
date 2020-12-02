# CodePaint
A blazing-fast syntax highlighter for the web

## How to use
To use codepaint, include the following tag in your HTML file:
```html
<script src="https://unpkg.com/codepaint@1.0.1/out/bundle.js"></script>
```

To tokenize all code on your website at run time, add the following *additional* script tag:
```html
<script>
  codepaint.paintAll('pre');
</script>
```

### Usage in Node.js
To use `CodePaint` with node.js, install it from the NPM registry:
```bash
npm i codepaint
# OR
yarn add codepaint
```

To highlight a code string, use the `paintString` method:
```js
const codepaint = require('codepaint');
const highlighted_html = codepaint.paintString(`console.log('hi')`);
console.log(highlighted_html);
// Output:
// <span class="token identifier">console</span><span class="token period punctuation">.</span><span class="token identifier">log</span><span class="token left-parenthesis punctuation">(</span><span class="token string">'hi'</span><span class="token right-parenthesis punctuation">)</span>
```

**Note:**
In *Node.js*, `paint` and `paintAll` **will not work**.

## Styling
`CodePaint` only generates HTML markup. Like with `prism`, you have to define the styles & colors yourself in a CSS file. Every element in a painted `pre > code` tag has the `token` class. All tokens that can be highlighted have additional classes describing the token.

Example style file:
```css
pre,
code {
  font-family: 'Fira Code', 'Space Mono', 'Courier New', Courier, monospace;
}

pre {
  padding: 1rem 2rem;
  background-color: #1e1b2c;
}

.token {
  color: #cfd7de;
  font-size: 12.5px;
}

.token.colon,
.token.operator,
.token.keyword {
  color: #e028a0;
}

.token.string {
  color: #42b983;
}

.token.constant {
  color: #8d1ddf;
}

.token.punctuation {
  color: #2194cd;
}

.token.period {
  color: #cfd7de;
}

.token.comment {
  color: #50636b;
}
```