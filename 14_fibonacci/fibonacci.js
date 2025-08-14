const fibonacci = function(n) {

  const fib = [1, 1];
  for (let i = 2; i < n; i++) {
    fib[i] = fib[i - 1] + fib[i - 2];
  };
  return fib.slice(0, n);
};


// Do not edit below this line
module.exports = fibonacci;
