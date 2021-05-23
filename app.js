function getNthFibonacci(n) {
  if (n > 2) {
    return getNthFibonacci(n - 2) + getNthFibonacci(n - 1);
  }
  if (n > 1) {
    return n - 1;
  }
  return n;
}

module.exports = getNthFibonacci;
