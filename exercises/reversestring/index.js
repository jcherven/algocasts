// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

function reverse(str) {
  //*** using reverse array helper
  /* 1. turn str into an array
   * 2. call the reverse method on the array
   * 3. join the array back into a string
   * 4. return the result
   */
  // return str
  //   .split('')
  //   .reverse()
  //   .join('');
  //*** using es6 terse for loop
  /* 1. create an empty string called reversed
   * 2. for each char in the string
   *  1. take the char and add it to the start of reversed
   * 3. return reversed
   */
  // let reversed = '';
  // for (let char of str) {
  //   reversed = char + reversed;
  // }
  // return reversed;
  //*** using es6 reduce()
  /* 1. split the string into and array of chars
   * 2. reduce, passing in an array reversed and a var char to the callback function
   *   1. the callback function cats char and reversed
   * 3. return the entire statement
   */
  // return str.split('').reduce((reversed, char) => char + reversed, '');
}

module.exports = reverse;
