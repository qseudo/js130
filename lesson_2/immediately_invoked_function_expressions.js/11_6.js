let bar = (function(start) {
  let prod = start;
  return function(factor) {
    prod *= factor;
    return prod;
  };
})(2);

let result = bar(3); // 6
result += bar(4); // 24
result += bar(5); // 120
console.log(result);