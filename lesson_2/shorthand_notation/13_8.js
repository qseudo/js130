/*
  input:
    -5 string arguments
  output:
    -object with 3 properties
      -first: the first arg
      -last: the last arg
      -middle: middle 3 args as a sorted array

  rules:
    -arguments provided should come from an array
    -use shorthand syntax where you can
    -create local variables `first`, `last`, `middle`, from the return value

  examples:
  [1, 2, 3, 4, 5] => { first: 1, middle: [2, 3, 4], last: 5 }
  [5, 10, 15, 20, 25] => { first: 5, middle: [10, 15, 20], last: 25 }

  first: arg[0], middle: [ arg[1], arg[2], arg[3] ], last: arg[4]
*/

function strToObj(first, middle1, middle2, middle3, last) {
  return {
    first,
    middle: [middle1, middle2, middle3].sort(),
    last,
  };
}

let arr = [1, 2, 3, 4, 5];

let { first, middle, last } = strToObj(...arr);

console.log(first);
console.log(middle);
console.log(last);