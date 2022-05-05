function makeCounter() {
  let counter = 0;

  return function() {
    counter += 1;
    return counter;
  }; // closure around `counter`
}

let incrementCounter = makeCounter();
console.log(incrementCounter()); // 1
console.log(incrementCounter()); // 2

incrementCounter = makeCounter(); // 0
console.log(incrementCounter()); // 1
console.log(incrementCounter()); // 2