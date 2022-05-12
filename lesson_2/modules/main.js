let { foo } = require("./foo");
let { bar, getCounter, items, counter } = require("./bar");

foo();
console.log(items);        // [ 'item 1' ]
console.log(getCounter()); // 1
console.log(counter);      // 0

bar();
console.log(items);        // [ 'item 1', 'item 2' ]
console.log(getCounter()); // 2
console.log(counter);      // 0


