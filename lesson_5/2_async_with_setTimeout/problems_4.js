setTimeout(function() {
  setTimeout(function() {
    let q = () => console.log('q');
    q();
  }, 15);

  let d = () => console.log('d');
  d();

  setTimeout(function() {
    let n = () => console.log('n');
    n();
  }, 5);

  let z = () => console.log('z');
  z();
}, 10);

setTimeout(function() {
  let s = () => console.log('s');
  s();
}, 20);

setTimeout(function() {
  let f = () => console.log('f');
  f();
});

let g = () => console.log('g');
g(); // 1

/*
attempt: g(), f(), d(), z(), n(), q(), s()
answer: g(), f(), d(), z(), n(), s(), q()

nested setTimeout means inner delay starts after outer setTimeout starts,
so q() would invoke 25ms after, whereas s() invokes 20ms after
*/