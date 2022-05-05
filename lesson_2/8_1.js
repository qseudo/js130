let counter = 0;

function makeCounter() {
  return function() {
    counter += 1;
    return counter;
  }; // closure around global let `counter`
} // closure around `counter` ? function inside it requires `counter`, not the function itself...

let incrementCounter = makeCounter();
console.log(incrementCounter()); // 1
console.log(incrementCounter()); // 2

incrementCounter = makeCounter();
console.log(incrementCounter()); // 3
console.log(incrementCounter()); // 4