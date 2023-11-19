const add = function (a, b) {
  return a + b;
};

const subtract = function (a, b) {
  return a - b;
};

const sum = function (array) {
  return array.reduce((sum, number) => (sum += number), 0);
};

const multiply = function (array) {
  return array.reduce((sum, number) => (sum *= number));
};

const power = function (num, pow) {
  return Math.pow(num, pow);
};

const factorial = function fac(n) {
  return n < 2 ? 1 : fac(n - 1) * n;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial,
};
