// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str) {
  /* 1. declare a new empty object
   * 2. for every character of the string
   *   1. if the char exists (isn't null)
   *     1. increment the number value of that char's key
   *   2. else (the value is null) set it to 1
   * 3. assign a number variable 0 for the most occurring letter
   * 4. assign an empty string variable for the most occurring letter
   * 5. for every key in charmap
   *   1. if the value of the key is greater than the max number
   *     1. assign the key's value to the max number variable
   *     2. assign the string variable to the current char
   * 6. return the most occurring letter
   */
  let charMap = {};
  let max = 0;
  let maxChar = '';

  for (let char of str) {
    // if (charMap[char]) {
    //   charMap[char]++;
    // } else {
    //   charMap[char] = 1;
    // }
    charMap[char] = charMap[char]++ || 1;
  }

  for (let char in charMap) {
    if (charMap[char] > max) {
      max = charMap[char];
      maxChar = char;
    }
  }
  return maxChar;
}

module.exports = maxChar;
