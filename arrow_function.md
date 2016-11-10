## Arrow Functions
### Expression Bodies

More expressive closure syntax.

**ES6**
```javascript
  odds  = evens.map(v => v + 1)
  pairs = evens.map(v => ({ even: v, odd: v + 1 }))
  nums  = evens.map((v, i) => v + i)
```

**ES5**

```javascript
  odds  = evens.map(function(v) { 
     return v + 1 
  })

  pairs = evens.map(function(v) { 
    return ({ even: v, odd: v + 1 })
  })

  nums  = evens.map(function(v, i) {
    return  v + i
  })
```

### Statement Bodies

**ES6**
```javascript
nums.forEach(v => {
   if (v % 5 === 0)
       fives.push(v)
})

```
**ES5**
```javascript
nums.forEach(function (v) {
   if (v % 5 === 0)
       fives.push(v);
});
```

### Lexical this
**ES6**
```javascript
  this.nums.forEach((v) => {
    if (v % 5 === 0)
        this.fives.push(v)
  })
```

**ES5**
```javascript
//  variant 1
var self = this;
this.nums.forEach(function (v) {
    if (v % 5 === 0)
        self.fives.push(v);
});

//  variant 2
this.nums.forEach(function (v) {
    if (v % 5 === 0)
        this.fives.push(v);
}, this);

//  variant 3 (since ECMAScript 5.1 only)
this.nums.forEach(function (v) {
    if (v % 5 === 0)
        this.fives.push(v);
}.bind(this));
```