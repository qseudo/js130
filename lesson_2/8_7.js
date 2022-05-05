function foo(start) {
  let prod = start;
  return function(factor) {
    prod *= factor;
    return prod;
  }; // returned function definition (expression) creates closure around outer
  // function's local variable `let`. carries an envelope that contains pointers
  // to variables it needs, since those variables cannot be found locally within
  // the returned function
}

let bar = foo(2); // prod = 2
// invoke `foo`, initializing the value of `prod` to 2
let result = bar(3); // prod = prod * factor, prod = 2 * 3, prod = 6, result = 6
// invoke bar, reassigning `prod` to 6, and assigning `result` to prod, 6
result += bar(4); // prod = prod * 4, prod = 6 * 4, prod = 24, result = 30
// invoke bar again. prod is 6 from previous invocation
// prod is now 24. add result to prod, = 30
result += bar(5); // prod = prod * 5, prod = 24 * 5, prod = 120, result = 150
// prod is 24 from previous invocation, prod = 24 * 5, prod = 120. result += 120
console.log(result);
// logs 150