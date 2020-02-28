// --- Directions
// Print out the n-th entry in the fibonacci series.
// The fibonacci series is an ordering of numbers where
// each number is the sum of the preceeding two.
// For example, the sequence
//  [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
// forms the first ten entries of the fibonacci series.
// Example:
//   fib(4) === 3

//*** Iterative solution (On runtime)
/* 1. Create an array seeded with elements 0, 1
 * 2. For every int counting up to n, starting at 2:
 *   1. calculate the value two elements back in the array
 *   2. calculate the value one element back in the array
 *   3. push the sum of these values to the array
 * 3. return the nth element of the array
 */
//function fib(n) {
//  const result = [0, 1];
//  for (let i = 2; i <= n; i++) {
//    const a = result[i - 1];
//    const b = result[i - 2];
//    result.push(a + b);
//  }
//  return result[result.length - 1];
//  //return result[n];
//}

//*** Recursive solution (0^n runtime)
// This is kind of a gatekeeping problem of sorts, most people won't expect someone to independently arrive at the solution in just a few minutes. For a lot of people, you've either seen it before and can recite the solution on command, or you haven't seen it before.
// function fib(n) {
//   if (n < 2) {
//     return n;
//   }
//   return fib(n - 1) + fib(n - 2);
// }

//*** Improved Recursive Solution (0 runtime)
/* 1. Create a memoizer function
 *   1. Initialize an object for the cache of already used return values of fib
 *   2. return an anonymous function that takes in arbitrary arguments
 *     1. If the args already exist in the cache:
 *       1. Return the value at the matching key
 *     2. Assign a result variable to the passed in function, calling it with the new args
 *     3. Write the result to cache with a new key
 *     4. Return result
 * 2. Assign fib to the memoizer called with fib as an argument
 *
 */
function memoize(fn) {
  const cache = {};
  return function(...args) {
    if (cache[args]) {
      return cache[args];
    }
    const result = fn.apply(this, args);
    cache[args] = result;
    return result;
  };
}

function fib(n) {
  if (n < 2) {
    return n;
  }
  return fib(n - 1) + fib(n - 2);
}

fib = memoize(fib);

module.exports = fib;
