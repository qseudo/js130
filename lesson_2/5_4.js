var bar = 82;
function foo() {
  var bar = bar - 42;
  console.log(bar);
}

foo();

// hoisted ver.
function foo() { // function declaration hoisted above `var` declarations
  var bar; // undefined

  bar = bar - 42; // undefined - 42 = NaN
  console.log(bar); // logs NaN
}

var bar; // undefined

bar = 82; // bar = 82

foo(); // logs NaN