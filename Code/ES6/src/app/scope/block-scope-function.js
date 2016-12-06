function fooInES6(flag) {
  if (flag) {
    let a = 10;
  }
  return a; // Reference error
}

console.log(fooInES6(true))