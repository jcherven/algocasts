// --- Directions
// Write a function that accepts a string.  The function should
// capitalize the first letter of each word in the string then
// return the capitalized string.
// --- Examples
//   capitalize('a short sentence') --> 'A Short Sentence'
//   capitalize('a lazy fox') --> 'A Lazy Fox'
//   capitalize('look, it is working!') --> 'Look, It Is Working!'

function capitalize(str) {
  //*** Neat method
  /* 1. make an empty array 'words'
   * 2. split the input srting by spaces to get an array
   * 3. for each word in the array:
   *   1. uppercase the first letter of the word
   *   2. join the first letter with the rest of the string
   *   3. push the result into the words array
   * 4. join words into a string and return it
   * */
  // const words = [];
  // const arr = str.split(' ');
  // for (let word of arr) {
  //   words.push(word[0].toUpperCase() + word.slice(1));
  // }
  // return words.join(' ');
  //*** Lookback method
  /* 1. create result which is the first character of the input string capitalized.
   * 2. for each character in the string
   *   1. if the character to the left is a space
   *   2. capitalize it and add it to result
   *   3. else
   *     1. add it to result
   */
  // let result = str[0].toUpperCase();
  // for (let i = 1; i < str.length; i++) {
  //   if (str[i - 1] === ' ') {
  //     result += str[i].toUpperCase();
  //   } else {
  //     result += str[i];
  //   }
  // }
  // return result;
}

module.exports = capitalize;
