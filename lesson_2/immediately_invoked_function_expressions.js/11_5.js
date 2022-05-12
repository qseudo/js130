(function foo() {
  console.log('Bar');
})();

foo() // ?

// the function `foo` is not visible in the scope in which the
// expression that contains it was defined in
// IIFEs create local private scope