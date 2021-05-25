// Chai dependency
const { assert } = require('chai');

// Import getNthFibonacci function.
const getNthFibonacci = require('../app');

describe('Fibonacci Sequence', () => {
  describe('valid Fibonacci number', () => {
    it('getNthFibonacci(0) == 0', () => {
      assert.equal(getNthFibonacci(0), 0);
    });
    it('getNthFibonacci(1) == 1', () => {
      assert.equal(getNthFibonacci(1), 1);
    });
    it('getNthFibonacci(2) == 1', () => {
      assert.equal(getNthFibonacci(2), 1);
    });
    it('getNthFibonacci(3) == 2', () => {
      assert.equal(getNthFibonacci(3), 2);
    });
    it('getNthFibonacci(5) == 5', () => {
      assert.equal(getNthFibonacci(5), 5);
    });
    it('getNthFibonacci(9) == 34', () => {
      assert.equal(getNthFibonacci(9), 34);
    });
  });
  describe('Invalid Fibonacci number', () => {
  // Validating Fib numbers that are negative
    it('getNthFibonacci(-45) == "n cannot be negative"', () => {
      assert.throws(() => getNthFibonacci(-45), 'n cannot be negative');
    });
  });
});
