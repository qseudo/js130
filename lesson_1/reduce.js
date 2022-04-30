function reduce(array, callback, initialVal = array[0]) {
  let idx = 0;
  if (initialVal === array[0]) idx = 1;

  for (idx; idx < array.length; idx += 1) {
    initialVal = callback(initialVal, array[idx]);
  }

  return initialVal;
}

// 1, 3, 6, 10, 15

let numbers = [1, 2, 3, 4, 5];
console.log(reduce(numbers, (accum, number) => accum + number));   // => 15
console.log(reduce(numbers, (prod, number) => prod * number));     // => 120
console.log(reduce(numbers, (prod, number) => prod * number, 3));  // => 360
console.log(reduce([], (accum, number) => accum + number, 10));    // => 10
console.log(reduce([], (accum, number) => accum + number));
// => undefined

let stooges = ["Mo", "Larry", "Curly"];
console.log(reduce(stooges, (reversedStooges, stooge) => {
  reversedStooges.unshift(stooge);
  return reversedStooges;
}, []));
// => ["Curly", "Larry", "Mo"]