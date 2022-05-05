function makeCounter() {
  let counter = 0;

  return function() {
    counter += 1;
    return counter;
  };
}

let incrementCounter1 = makeCounter(); // 0
let incrementCounter2 = makeCounter(); // 0

console.log(incrementCounter1()); // 1
console.log(incrementCounter1()); // 2

console.log(incrementCounter2()); // 1
console.log(incrementCounter2()); // 2