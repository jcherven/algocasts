// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a step shape
// with N levels using the # character.  Make sure the
// step has spaces on the right hand side!
// --- Examples
//   steps(2)
//       '# '
//       '##'
//   steps(3)
//       '#  '
//       '## '
//       '###'
//   steps(4)
//       '#   '
//       '##  '
//       '### '
//       '####'

// function steps(n) {
//*** Non-recursive tactic
// Derived from drawing a table of the output #'s and spaces
// The table shows that spaces where column <= row have #'s, while others have spaces
/* 1. From 0 to n
 *   1. create an empty string stair
 *   2. From 0 to n:
 *     1. if the current column is equal to or less than the current row
 *       1. add a # to stair
 *     2. else
 *       1. add a space to stair
 *   3. console.log stair
 */
// for (let row = 0; row < n; row++) {
//   let stair = '';
//   for (let column = 0; column < n; column++) {
//     if (column <= row) {
//       stair += '#';
//     } else {
//       stair += ' ';
//     }
//   }
//   console.log(stair);
// }
// }

//*** Recursive tactic
/* 1. if (row === n), break out of the function
 * 2. if stair is length === n, the row is complete
 * 3. if the length of the stair is less than or wqual to the current row number, add a #, otherwise add a space
 */
function steps(n, row = 0, stair = '') {
  if (n === row) {
    return;
  }
  if (n === stair.length) {
    console.log(stair);
    return steps(n, row + 1);
  }
  if (stair.length <= row) {
    stair += '#';
  } else {
    stair += ' ';
  }
  return steps(n, row, stair);
}

module.exports = steps;
