// original code
var foo = function() {
  console.log("Bye");
};

function foo() {
  console.log("Hello");
}

foo();

// hoisted ver.
function foo() {
  console.log("Hello");
} // function declaration hoisted to the top, above `var` variables

// var foo; 
// variable declaration hoisted to the top
// `var` declaration with same name as function is discarded

foo = function() {
  console.log("Bye");
}; // foo reassigned to a function express

foo(); // function invoked, logs 'Bye'