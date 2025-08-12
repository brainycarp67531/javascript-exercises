const add = function(x, y) {
  return x + y;
};

const subtract = function(x, y) {
  return x - y;
};

const sum = function(array) {
  return array.reduce((accumulator, currentValue) =>
  accumulator = accumulator + currentValue, 0);
};

const multiply = function(array) {
  return array.reduce((accumulator, currentValue) =>
  accumulator = accumulator * currentValue, 0);
};

const power = function(x, y) {
  return Math.pow(x, y);
};

const factorial = function(x) {
  return Math.factorial(x);
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
