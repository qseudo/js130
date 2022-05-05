bar();

var bar = function() {
  console.log("foo!");
};

// hoisted ver.

var bar; // undefined

bar(); // `bar` is not a function

bar = function() {
  console.log("foo!");
};

// fixed ver.

bar();

function bar() {
  console.log("foo!");
};