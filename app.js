function getNthFibonacci(n) {
  if (n < 0) {
    throw new Error('n cannot be negative');
  }
  if (n > 2) {
    return getNthFibonacci(n - 2) + getNthFibonacci(n - 1);
  }
  if (n > 1) {
    return n - 1;
  }
  return n;
}

module.exports = getNthFibonacci;
