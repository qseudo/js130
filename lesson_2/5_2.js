for (var index = 0; index < 2; index += 1) { // index -> global scope
  console.log(foo);
  if (index === 0) {
    var foo = "Hello"; // foo -> global scope
  } else {
    foo = "Bye";
  }
}

console.log(foo);
console.log(index);

// hoisted ver.

var index; // undefined, global scope
var foo; // undefined, global scope

for (index = 0; index < 2; index += 1) {
  console.log(foo);
  if (index === 0) {
    foo = "Hello";
  } else {
    foo = "Bye";
  }
}

console.log(foo);
console.log(index);

/*
undefined
Hello
Bye
2
*/