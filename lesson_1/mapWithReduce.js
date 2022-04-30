function map(array, callback) {
  return array.reduce((result, val) => {
    result.push(callback(val));
    return result;
  }, []);
}

console.log(map([1, 2, 3, 4], elem => elem * elem));