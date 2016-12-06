//  simple generator
function *foo() { 
  yield 'a';
  yield 'b';
}
console.log([ ...foo() ])

//  simple generator with return value
function *foo() { 
  yield 'a';
  yield 'b';
  return 'result'
}
var g = foo();

console.log(g.next()) // value : a
console.log(g.next()) // value : b
console.log(g.next()) // value : result

function *foo(x) {
    var y = 2 * (yield (x + 1));
    var z = yield (y / 3);
    return (x + y + z);
}

var it = foo(5);

console.log(it.next()); 
console.log(it.next());
console.log(it.next(13));
