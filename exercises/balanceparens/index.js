// --- Directions
// Write a function that console logs whether or not a string that is passed in
// contains balanced parentheses pairs or not. The function should take in a
// string and return a boolean value.
// --- Example
//   balancedParens('(((())))');
//   true
//   balancedParens('(((');
//   false
//   balancedParens('(hello((('hi there')');
//   false

// 1. Create an array of the string that gets passed in
// 2. Make a counter
// 3. For every opening paren, the counter increments by one
// 4. For every closing paren, the counter decrements by one
// 5. If the counter is not zero after the array has been parsed, return false
// 6. If the counter is zero after the array has been parsed, return true
function balancedParens(string) {
  // Using the not true marker returns a boolean
  return !string.split('').reduce((previous, char) => {
    // This if branch catches the case where parens are balance, but they are
    // in the reverse order, which should return false
    if (previous < 0) {
      return previous;
    }
    // Increment the balance counter if there's an opening paren
    if (char === '(') {
      return ++previous;
    }
    // decrement the balance counter if there is a closing paren
    if (char === ')') {
      return --previous;
    }
    // return the balance counter
    return previous;
  }, 0);
}

module.exports = balancedParens;
