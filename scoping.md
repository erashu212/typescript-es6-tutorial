## Scoping -
* The **current context** of execution.
* The context in which values and expression are **visible** or can be referenced.

#### Let's take a very simple code.
#### ES5 
```javascript
 for(var i = 0; i <= 5; i++ ) {
   setTimeout(function() {
     console.log(i + 1);
   })
 }
 // Output
  6,
  6,
  6,
  6,
  6,
  6
  // Expected
   1,
   2,
   3,
   4,
   5,
   6
```
- We can solve this problem with the help of IIFE as in below code
```javascript
  for(var i = 0; i <= 5; i++ ) {
   (function(i){
     setTimeout(function() {
      console.log(i + 1);
    })
   })(i)
 }
 // Output
   1,
   2,
   3,
   4,
   5,
   6
```
- But in ES6, we can use **let** keyword.

> The **let** statement declares a block scope local variable, optionally initializing it to a value.

```javascript
  for(let i = 0; i <= 5; i++ ) {
    setTimeout(function() {
        console.log(i + 1);
    })
 }
 // Output
   1,
   2,
   3,
   4,
   5,
   6
```

```javascript
**ES5**

function varTest() {
  var obj = 1;
  if(true) {
    var obj = 2;
    console.log(obj)
  }
  console.log(obj)
}

// Output
2
2

**ES6**

function letTest() {
  let obj = 1;
  if(true) {
    let obj = 2;
    console.log(obj);
  }
  console.log(obj)
}
//Output
2,
1
```
> So `var` provides the function level scope while `let` does have blocked ({}) level scope.
