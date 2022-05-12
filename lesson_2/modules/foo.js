let { bar } = require("./bar");

let xyz = 1;

function foo() {
  console.log(xyz);
  xyz += 1;
  bar();
}

module.exports = {
  foo,
};