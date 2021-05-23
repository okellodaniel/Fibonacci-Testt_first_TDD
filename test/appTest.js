const { assert } = require('chai');
const getNthFibonacci = require('../app');

describe('Fibonacci Sequence', () => {
  it('Should return 0 for the Fibonacci Number equals 0', () =>{
    assert.equal(getNthFibonacci(0), 0);
  });
  it('Should return 1 for the Fibonacci number equal 1', () => {
    assert.equal(getNthFibonacci(1), 1);
  });
  it('should return 1 for the 2nd Fibonacci number', () => {
    assert.equal(getNthFibonacci(2), 1);
  });
  it('should return 2 for the 3rd Fibonacci number', () => {
    assert.equal(getNthFibonacci(3), 2);
  });
  it('should return 34 when Fibonacci number eqlas 9', () =>{
    assert.equal(getNthFibonacci(9), 34);
  })
});
