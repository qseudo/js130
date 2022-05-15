let obj = (function() {
  let counter = 0;
  return {
    getCounter() {
      return counter;
    },

    incrementCounter() {
      counter += 1;
    }
  };
})();

console.log(obj.getCounter());
obj.incrementCounter();
console.log(obj.getCounter());