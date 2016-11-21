## Constant -
* The const declaration creates a read-only reference to a value.
* This only makes the variable itself immutable, not its assigned content.

### ES6
#### 1
```javascript
  const PI = 3.141593;
  PI = 3 // this will throw error, PI is read only.
```

#### 2
```javascript
  const user = {
    name : 'abc',
    age  : 20
  }
  
  // this will throw error, user is read only.
  user = {
    name : 'singh'
  }

  // this is valid, as content of user is not freezed.
  user.name = 'xyz' 
```

#### 3
```javascript
  const MY_ARRAY = [];
  // these are valid.
  MY_ARRAY.push("A"); // ["A"]
  MY_ARRAY.push("B"); // ["B"]
  // this will throw error, MY_ARRAY is read only.
  MY_ARRAY = ["B"]
```