// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a pyramid shape
// with N levels using the # character.  Make sure the
// pyramid has spaces on both the left *and* right hand sides
// --- Examples
//   pyramid(1)
//       '#'
//   pyramid(2)
//       ' # '
//       '###'
//   pyramid(3)
//       '  #  '
//       ' ### '
//       '#####'

//*** Straighforward iterative tactic
/* 0. Determine a row's midpoint for n columns ( Math.floor(2 * n - 1) / 2 )
 * 1. For 0 to n (iterate through rows)
 *   1. Create an empty string level
 *   2. For 0 to (2n - 1) columns
 *     1. If midpoint - row <= column AND midpoint + row >= column
 *       1. Add a # to level
 *     2. Else
 *       1. Add a space to level
 *   3. Console.log stair
 */
// function pyramid(n) {
//   const midpoint = Math.floor((2 * n - 1) / 2);
//   for (let row = 0; row < n; row++) {
//     let level = '';
//     for (let column = 0; column < 2 * n - 1; column++) {
//       if (midpoint - row <= column && midpoint + row >= column) {
//         level += '#';
//       } else {
//         level += ' ';
//       }
//     }
//     console.log(level);
//   }
// }

//*** Recursive tactic
// function pyramid(n, row = 0, level = '') {
//   if (row === n) {
//     return;
//   }
//   if (level.length === 2 * n - 1) {
//     console.log(level);
//     return pyramid(n, row + 1);
//   }
//   const midpoint = Math.floor((2 * n - 1) / 2);
//   let add;
//   if (midpoint - row <= level.length && midpoint + row >= level.length) {
//     add = '#';
//   } else {
//     add = ' ';
//   }
//   pyramid(n, row, level + add);
// }

module.exports = pyramid;
