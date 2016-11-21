## Array Matching -
* Intuitive and flexible destructuring of Arrays into individual variables during assignment.


### ES6
```javascript
var list = [ 1, 2, 3 ]
var [ a, , b ] = list
[ b, a ] = [ a, b ]
```

## ES5
```javascript
var list = [ 1, 2, 3 ];
var a = list[0], b = list[2];
var tmp = a; a = b; b = tmp;
```

[More example](https://medium.com/@mikaelbrevik/es2015-destructuring-ultimate-example-collection-335822261de3#.qbhinfklr)