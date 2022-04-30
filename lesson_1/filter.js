function filter(array, callback, thisArg) {
  /*
  input:
    -array
    -callback function

  output:
    -new array
  */
  let result = [];

  for (let idx = 0; idx < array.length; idx += 1) {
    let elem = array[idx];
    if (callback.call(thisArg, elem, idx, array)) result.push(elem);
  }

  return result;
}

let numbers = [1, 2, 3, 4, 5];
console.log(filter(numbers, number => number > 3)); // => [ 4, 5 ]
console.log(filter(numbers, number => number < 0)); // => []
console.log(filter(numbers, () => true));           // => [ 1, 2, 3, 4, 5 ]

let values = [1, "abc", null, true, undefined, "xyz"];
console.log(filter(values, value => typeof value === "string"));
// => [ 'abc', 'xyz' ]