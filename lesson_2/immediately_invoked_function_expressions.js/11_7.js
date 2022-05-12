(function counter(number) {
  console.log(number);

  if (number !== 0) {
    counter(number - 1);
  }
})(7);