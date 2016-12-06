## Default Parameter Values -
* Simple and intuitive default values for function parameters.

### ES6
```javascript
function f (x, y = 7, z = 42) {
    return x + y + z
}
f(1) === 50
```

### ES5
```javascript
 function f (x, y, z) {
    if (y === undefined)
        y = 7;
    if (z === undefined)
        z = 42;
    return x + y + z;
 };
f(1) === 50;
f(1) === 50
```


## Rest Parameter
* Aggregation of remaining arguments into single parameter of variadic functions.

### ES6
```javascript
function f (x, y, ...a) {
    return (x + y) * a.length
}
f(1, 2, "hello", true, 7) === 9
```

### ES5
```javascript
function f (x, y) {
    var a = Array.prototype.slice.call(arguments, 2);
    return (x + y) * a.length;
};
f(1, 2, "hello", true, 7) === 9;
```

> Restriction: no other named arguments can follow in the function declaration.

## Spread Operator
* Spreading of elements of an iterable collection (like an array or even a string) into both literal elements and individual function parameters..

### ES6
```javascript
var params = [ "hello", true, 7 ]
var other = [ 1, 2, ...params ] // [ 1, 2, "hello", true, 7 ]
f(1, 2, ...params) === 9

var str = "foo"
var chars = [ ...str ] // [ "f", "o", "o" ]
```

### ES5
```javascript
var params = [ "hello", true, 7 ];
var other = [ 1, 2 ].concat(params); // [ 1, 2, "hello", true, 7 ]
f.apply(undefined, [ 1, 2 ].concat(params)) === 9;

var str = "foo";
var chars = str.split(""); // [ "f", "o", "o" ]

```

#### Example

```javascript
```