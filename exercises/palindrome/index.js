// --- Directions
// Given a string, return true if the string is a palindrome
// or false if it is not.  Palindromes are strings that
// form the same word if it is reversed. *Do* include spaces
// and punctuation in determining if the string is a palindrome.
// --- Examples:
//   palindrome("abba") === true
//   palindrome("abcdefg") === false

function palindrome(str) {
  //*** Most direct way
  /* 1. reverse the string
   * 2. if the reversed string is not identical return false
   * 3. else, return true
   */
  // let reversed = str
  //   .split('')
  //   .reverse()
  //   .join('');
  // return reversed === str ? true : false;
  // return reversed === str;
  //*** Using the .every() array method
  /* 1. split the string into chars
   * 3. with .every(), pass in a char var and an index var
   * 3. return the t/f evaluation of: char is equal to the string length minus the index
   */
  // return str.split('').every((char, index) => {
  //   return char === str[str.length - index - 1];
  // });
}

module.exports = palindrome;
