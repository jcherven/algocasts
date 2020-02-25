// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9

function reverseInt(n) {
  /* 1. convert the number to string
   * 2. split the string to an array
   * 3. reverse the array
   * 4. join the array to a string
   * 5. parse the string as a number
   * 6. multiply the number by the result of math.sign() to match its sign
   */
  const reversed = n
    .toString()
    .split('')
    .reverse()
    .join('');

  return parseInt(reversed) * Math.sign(n);
}

module.exports = reverseInt;
