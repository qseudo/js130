function foo(condition) {
  let bar;
  console.log(bar); // logs undefined

  let qux = 0.5772;

  if (condition) {
    qux = 3.1415;
    console.log(qux); // 3.1415
  } else {
    bar = 24;

    let xyzzy = function() {
      var qux; // undefined

      qux = 2.7183;
      console.log(qux);
    };

    console.log(qux); // 0.5772
    console.log(xyzzy()); // 2.7183, line 49 and implicit function return, undefined
  }

  qux = 42;
  console.log(qux); // 42
}

foo(true);
/*
undefined
3.1415
42
*/
foo(false);
/*
undefined
0.5772
2.7183
undefined
42
*/

