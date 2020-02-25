// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

// word.replace(/[^\w]/g, '').toLowerCase()
/*** Character map tactic
  1. clean out whitespace and punctuation with regex. Convert to lower case.
  2. make char maps of the strings passed in. char maps are sorted alphabetically.
  3. step through char map 1, comparing each letter and quantity to char map 2.
  Edge cases:
    1. If char map 2 has more characters than char map 1 as in the case of a plural form of a word, you may get a false positive.
  */
// function anagrams(stringA, stringB) {
//   const charMapA = buildCharMap(stringA);
//   const charMapB = buildCharMap(stringB);
//   if (Object.keys(charMapA).length !== Object.keys(charMapB).length) {
//     return false;
//   }
//   for (let char in charMapA) {
//     if (charMapA[char] !== charMapB[char]) {
//       return false;
//     }
//   }
//   return true;
// }

// function buildCharMap(str) {
//   const charMap = {};
//   const cleanedStr = str.replace(/[^\w]/g, '').toLowerCase();
//   for (let char of cleanedStr) {
//     charMap[char] = charMap[char] + 1 || 1;
//   }
//   return charMap;
// }

/*** Sorting strings tactic
  0. The essence of an anagram is that it's two identical lists of characters sorted in a certain order.
  1. Clean out whitespace and punctuation. Convert to lower case.
  2. sort both of the strings
  3. if the two sorted strings are identical, return true
*/

// function anagrams(stringA, stringB) {
//   return sortString(stringA) === sortString(stringB);
// }

// function sortString(str) {
//   return str
//     .replace(/[^\w]/g, '')
//     .toLowerCase()
//     .split('')
//     .sort()
//     .join('');
// }

module.exports = anagrams;
