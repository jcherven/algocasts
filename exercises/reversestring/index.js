// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

function reverse(str) {
  //*** using reverse array helper
  // return str
  //   .split('')
  //   .reverse()
  //   .join('');
  //*** using es6 terse for loop
  // let reversed = '';
  // for (let char of str) {
  //   reversed = char + reversed;
  // }
  // return reversed;
  //*** using es6 reduce()
  // return str.split('').reduce((reversed, char) => char + reversed, '');
}

module.exports = reverse;
