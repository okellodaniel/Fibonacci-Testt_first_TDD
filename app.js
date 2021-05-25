/**
 * 
================================================
  UNIT TESTING OF THE FIBONACCI SEQUENCE NUMBERS
================================================

PAIR PROGRAMMING 

1) Joanita Tushabe

2) Cathy Akoth

3) Okello Daniel

 */

// Given the Fibonacci Numbers and the sequence respectively,

// 1,2,3,4,5,6,7,8,9

// 1,1,2,3,5,8,13,21,34 

// F0 = F1 + F2 

function getNthFibonacci(n) {
  if (n < 0) {
    throw new Error('n cannot be negative');
  }
  if (n > 1 && n < 5) {
    return n - 1;
  }
  if (n >= 5) {
    return getNthFibonacci(n - 2) + getNthFibonacci(n - 1);
  }
  return n;
}
// console.log(getNthFibonacci(1));

// Export the getNthFibonacci function
module.exports = getNthFibonacci;
