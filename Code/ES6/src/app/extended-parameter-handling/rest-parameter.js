function sumOnlyNumber() {
  var numbers = filterNumbers(arguments);
  var sum = 0;

  return Array.prototype.reduce.call(numbers, function (sum, number) {
    return sum += number;
  })

  function filterNumbers(args) {
    return Array.prototype.filter.call(args, function (element) {
      return typeof element === 'number';
    });
  }
}

console.log(sumOnlyNumber('ashutosh', 'singh', 1, 2, 3, 'er.'))


// Using arrow functions
function sumOnlyNumber() {
  var numbers = filterNumbers(arguments);
  var sum = 0;

  return Array.prototype.reduce.call(numbers, (sum, number) => sum + number)

  function filterNumbers(args) {
    return Array.prototype.filter.call(args, (element) => typeof element === 'number');
  }
}

// Using rest parameters
function sumOnlyNumber(...args) {
  var numbers = filterNumbers();
  var sum = 0;

  return numbers.reduce((sum, number) => sum + number)

  function filterNumbers() {
    return args.filter(element => typeof element === 'number');
  }
}