(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["codepaint"] = factory();
	else
		root["codepaint"] = factory();
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/*! exports provided: paint, paintAll, paintString */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"paint\", function() { return paint; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"paintAll\", function() { return paintAll; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"paintString\", function() { return paintString; });\n/* harmony import */ var _paint__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./paint */ \"./src/paint/index.ts\");\n\n/**\n * Tokenize a *single* HTML element\n * @param element The HTML element or a selector pointing to the element to tokenize\n * @param async Whether to run asynchronously\n */\nfunction paint(element, async) {\n    // If `element` is a selector, query it\n    element = typeof element === 'string'\n        ? document.querySelector(element)\n        : element;\n    // Make sure element is non-null\n    if (element === null)\n        return;\n    // Make sure element has a `code` child\n    if (!element.getElementsByTagName('code'))\n        return;\n    var f = function (resolve) {\n        if (typeof element === 'object' && element)\n            element.getElementsByTagName('code')[0].innerHTML = Object(_paint__WEBPACK_IMPORTED_MODULE_0__[\"generateFromHTML\"])(element.getElementsByTagName('code')[0], element.dataset.lang || 'js');\n        resolve();\n    };\n    return async\n        ? new Promise(f)\n        : f(function () { });\n}\nfunction paintAll(elements, async) {\n    // If `element` is a selector, query it\n    elements = typeof elements === 'string'\n        ? document.querySelectorAll(elements)\n        : elements;\n    elements.forEach(function (element) { return paint(element, async); });\n}\n/**\n * Tokenize a string and return the tokenized string (or a promise resolving to the tokenized string if `async` is `true`)\n * @param string Source text\n * @param language What programming language is the source text written in?\n * @param async Whether to run asynchronously\n */\nfunction paintString(string, language, async) {\n    var f = function (resolve) {\n        return resolve(Object(_paint__WEBPACK_IMPORTED_MODULE_0__[\"generateFromText\"])(string, language || 'js'));\n    };\n    return async\n        ? new Promise(f)\n        : f(function (html) { return html; });\n}\n\n\n//# sourceURL=webpack://codepaint/./src/index.ts?");

/***/ }),

/***/ "./src/paint/index.ts":
/*!****************************!*\
  !*** ./src/paint/index.ts ***!
  \****************************/
/*! exports provided: generateFromHTML, generateFromText */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"generateFromHTML\", function() { return generateFromHTML; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"generateFromText\", function() { return generateFromText; });\n/* harmony import */ var _languages__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./languages */ \"./src/paint/languages/index.ts\");\n/* harmony import */ var _lexer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./lexer */ \"./src/paint/lexer.ts\");\n\n\nfunction associations(token, groupings) {\n    var res = [];\n    Object.keys(groupings).forEach(function (group) {\n        if (groupings[group].includes(token.type))\n            res.push(group);\n    });\n    return res;\n}\nfunction stringifyTokens(tokens, l) {\n    return tokens.map(function (token) { return \"<span class=\\\"token \" + token.type + [''].concat(associations(token, l.token_groupings)).join(' ') + \"\\\">\" + token.value + \"</span>\"; }).join('');\n}\nfunction generateFromHTML(element, language) {\n    var l = _languages__WEBPACK_IMPORTED_MODULE_0__[\"default\"][language || 'javascript'];\n    if (!l)\n        return element.innerText;\n    var text = element.innerText;\n    var tokens = Object(_lexer__WEBPACK_IMPORTED_MODULE_1__[\"tokenize\"])(text, l.tokens);\n    return stringifyTokens(tokens, l);\n}\nfunction generateFromText(text, language) {\n    var l = _languages__WEBPACK_IMPORTED_MODULE_0__[\"default\"][language || 'javascript'];\n    if (!l)\n        return text;\n    var tokens = Object(_lexer__WEBPACK_IMPORTED_MODULE_1__[\"tokenize\"])(text, l.tokens);\n    return stringifyTokens(tokens, l);\n}\n\n\n//# sourceURL=webpack://codepaint/./src/paint/index.ts?");

/***/ }),

/***/ "./src/paint/languages/index.ts":
/*!**************************************!*\
  !*** ./src/paint/languages/index.ts ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _javascript__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./javascript */ \"./src/paint/languages/javascript.ts\");\n\nvar languages = {\n    javascript: _javascript__WEBPACK_IMPORTED_MODULE_0__[\"default\"],\n    js: _javascript__WEBPACK_IMPORTED_MODULE_0__[\"default\"]\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (languages);\n\n\n//# sourceURL=webpack://codepaint/./src/paint/languages/index.ts?");

/***/ }),

/***/ "./src/paint/languages/javascript.ts":
/*!*******************************************!*\
  !*** ./src/paint/languages/javascript.ts ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nvar javascript = {\n    tokens: {\n        'period': {\n            match: /\\./\n        },\n        'left-parenthesis': {\n            match: /\\(/\n        },\n        'right-parenthesis': {\n            match: /\\)/\n        },\n        'string': {\n            match: /(?:\"[^\"\\n]*\")|(?:'[^'\\n]*')/\n        },\n        'comma': {\n            match: /,/\n        },\n        'semicolon': {\n            match: /;/\n        },\n        'keyword': {\n            match: /const|var|let|for|while|function|return|if|typeof|new/\n        },\n        'identifier': {\n            match: /^[a-zA-Z_][a-zA-Z_0-9]*/\n        },\n        'number': {\n            match: /^[0-9]+/\n        },\n        'colon': {\n            match: /:/\n        },\n        'arrow': {\n            match: /\\=>/\n        },\n        'eeeq': {\n            match: /\\=\\=\\=/\n        },\n        'eeq': {\n            match: /\\=\\=/\n        },\n        'eq': {\n            match: /\\=/\n        },\n        'not': {\n            match: /\\!/\n        },\n        'and': {\n            match: /&&/\n        },\n        'bitwise-and': {\n            match: /&/\n        },\n        'or': {\n            match: /\\|\\|/\n        },\n        'bitwise-or': {\n            match: /\\|/\n        },\n        'less-than-or-equal': {\n            match: /\\<\\=/\n        },\n        'less-than': {\n            match: /\\</\n        },\n        'greater-than-or-equal': {\n            match: /\\>\\=/\n        },\n        'greater-than': {\n            match: /\\>/\n        },\n        'question-mark': {\n            match: /\\?/\n        },\n        'comment': {\n            match: /\\/\\/[^\\n]*\\n/\n        }\n    },\n    token_groupings: {\n        'punctuation': [\n            'period',\n            'left-parenthesis',\n            'right-parenthesis',\n            'semicolon',\n            'colon',\n            'comma'\n        ],\n        'operator': [\n            'colon',\n            'arrow',\n            'eq',\n            'eeq',\n            'eeeq',\n            'not',\n            'bitwise-and',\n            'and',\n            'bitwise-or',\n            'or',\n            'less-than',\n            'greater-than',\n            'less-than-or-equal',\n            'greater-than-or-equal',\n            'question-mark'\n        ],\n        'constant': [\n            'number'\n        ],\n        'special': [\n            'keyword:new'\n        ]\n    }\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (javascript);\n\n\n//# sourceURL=webpack://codepaint/./src/paint/languages/javascript.ts?");

/***/ }),

/***/ "./src/paint/lexer.ts":
/*!****************************!*\
  !*** ./src/paint/lexer.ts ***!
  \****************************/
/*! exports provided: tokenize, Lexer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"tokenize\", function() { return tokenize; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Lexer\", function() { return Lexer; });\n/* harmony import */ var _pos__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pos */ \"./src/paint/pos.ts\");\n/* harmony import */ var _token__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./token */ \"./src/paint/token.ts\");\n\n\nfunction tokenize(text, tokens) {\n    var lex = new Lexer(text, tokens);\n    return lex.create_tokens();\n}\nvar Lexer = /** @class */ (function () {\n    function Lexer(text, tokens) {\n        this.pos = new _pos__WEBPACK_IMPORTED_MODULE_0__[\"default\"](text);\n        this.text = text;\n        this.selection = text;\n        this.tokens = tokens;\n    }\n    Lexer.prototype.advance = function (n) {\n        this.pos.advance(n);\n        this.selection = this.pos.idx < this.text.length\n            ? this.text.slice(this.pos.idx)\n            : null;\n    };\n    Lexer.prototype.create_tokens = function () {\n        var tokens = [];\n        while (this.selection) {\n            var token = undefined;\n            for (var name_1 in this.tokens) {\n                var res = this.tokens[name_1].match.exec(this.selection);\n                if (res && (res.index === 0)) {\n                    var pos_start = this.pos.clone();\n                    this.advance(res[0].length);\n                    var pos_end = this.pos.clone();\n                    token = new _token__WEBPACK_IMPORTED_MODULE_1__[\"default\"](name_1, res[0], pos_start, pos_end);\n                    break;\n                }\n            }\n            if (!token) {\n                var pos_start = this.pos.clone();\n                var text = this.selection[0];\n                this.advance(1);\n                var pos_end = this.pos.clone();\n                token = new _token__WEBPACK_IMPORTED_MODULE_1__[\"default\"]('raw', text, pos_start, pos_end);\n            }\n            tokens.push(token);\n        }\n        return tokens;\n    };\n    return Lexer;\n}());\n\n\n\n//# sourceURL=webpack://codepaint/./src/paint/lexer.ts?");

/***/ }),

/***/ "./src/paint/pos.ts":
/*!**************************!*\
  !*** ./src/paint/pos.ts ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nvar Pos = /** @class */ (function () {\n    function Pos(text, idx, col, ln) {\n        this.text = text;\n        this.idx = idx || 0;\n        this.col = col || 0;\n        this.ln = ln || 0;\n    }\n    Pos.prototype.advance = function (n) {\n        for (var i = 0; i < n; i++) {\n            if (this.text[this.idx] === '\\n') {\n                this.col = 0;\n                this.ln++;\n            }\n            this.idx++;\n        }\n    };\n    Pos.prototype.clone = function () {\n        return new Pos(this.text, this.idx, this.col, this.ln);\n    };\n    return Pos;\n}());\n/* harmony default export */ __webpack_exports__[\"default\"] = (Pos);\n\n\n//# sourceURL=webpack://codepaint/./src/paint/pos.ts?");

/***/ }),

/***/ "./src/paint/token.ts":
/*!****************************!*\
  !*** ./src/paint/token.ts ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nvar Token = /** @class */ (function () {\n    function Token(type, value, pos_start, pos_end) {\n        this.type = type;\n        this.value = value;\n        this.pos_start = pos_start;\n        this.pos_end = pos_end;\n    }\n    return Token;\n}());\n/* harmony default export */ __webpack_exports__[\"default\"] = (Token);\n\n\n//# sourceURL=webpack://codepaint/./src/paint/token.ts?");

/***/ })

/******/ });
});