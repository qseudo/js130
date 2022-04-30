function filter(array, callback) {
  let result = [];

  array.reduce((acc, val) => {
    if (callback(val)) acc.push(val);
    return acc;
  }, result);

  return result;
}

console.log(filter([1, 2, 3, 4], item => item % 2 === 0));