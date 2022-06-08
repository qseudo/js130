function delayLog() {
  var num;

  for (num = 1; num <= 10; num += 1) {
    setTimeout(() => console.log(num), num * 1000);
  }
}

delayLog();

/* 
setTimeout doesn't run until the program finishes running.
in var function, the callback function is defined and forms
a closure around `num`.

the function is defined 10 times within the for loop, but 
all 10 iterations form a closure around the same variable

then the callback is invoked after the code finishes running,
because callback functions passed through setTimeout only
run when JavaScript isn't doing anything else (i.e. when the
program ends)

the value at the end of the code is 11, so it logs 11 10 times


*/

// appears to be that setTimeout doesn't run until the for loop is finished
// why does var do that?
// hoisting?
// what would be hoisted?
// diff between var and let -> var function scoped, let block scoped
// let would mean variable is only available within the loop
// var would mean variable is available everywhere in the function