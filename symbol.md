## Symbol Type
* Unique and immutable data type to be used as an identifier for object properties. 
* Symbol can have an optional description, but for debugging purposes only.

### ES6
```javascript
Symbol("foo") !== Symbol("foo")
const foo = Symbol()
const bar = Symbol()
typeof foo === "symbol"
typeof bar === "symbol"
let obj = {}
obj[foo] = "foo"
obj[bar] = "bar"
JSON.stringify(obj) // {}
Object.keys(obj) // []
Object.getOwnPropertyNames(obj) // []
Object.getOwnPropertySymbols(obj) // [ foo, bar ]
```

### ES5
```javascript
"use strict";

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

Symbol("foo") !== Symbol("foo");
var foo = Symbol();
var bar = Symbol();
(typeof foo === "undefined" ? "undefined" : _typeof(foo)) === "symbol";
(typeof bar === "undefined" ? "undefined" : _typeof(bar)) === "symbol";
var obj = {};
obj[foo] = "foo";
obj[bar] = "bar";
JSON.stringify(obj); // {}
Object.keys(obj); // []
Object.getOwnPropertyNames(obj); // []
Object.getOwnPropertySymbols(obj); // [ foo, bar ]
```