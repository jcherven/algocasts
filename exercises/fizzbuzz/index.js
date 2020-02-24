// --- Directions
// Write a program that console logs the numbers
// from 1 to n. But for multiples of three print
// “fizz” instead of the number and for the multiples
// of five print “buzz”. For numbers which are multiples
// of both three and five print “fizzbuzz”.
// --- Example
//   fizzBuzz(5);
//   1
//   2
//   fizz
//   4
//   buzz

function fizzBuzz(n) {
  for (let i = 1; i <= n; i++) {
    //*** straightforward way is generally the best way for fizzbuzz
    //   if (i % 3 === 0 && i % 5 === 0) {
    //     console.log('fizzbuzz');
    //   } else if (i % 5 === 0) {
    //     console.log('buzz');
    //   } else if (i % 3 === 0) {
    //     console.log('fizz');
    //   } else {
    //     console.log(i);
    //   }
    //*** using a switch/case statement
    switch (true) {
      case i % 3 === 0 && i % 5 === 0:
        console.log('fizzbuzz');
        break;
      case i % 3 === 0:
        console.log('fizz');
        break;
      case i % 5 === 0:
        console.log('buzz');
        break;
      default:
        console.log(i);
    }
  }
}

module.exports = fizzBuzz;
