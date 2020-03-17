const balancedParens = require('./index');

test('balancedParens function is defined', () => {
  expect(balancedParens).toBeDefined();
});

test('Calling balancedParens with `()` returns `true`', () => {
  expect(balancedParens('()')).toBeTruthy();
});

test('Calling balancedParens with `((((()))))` returns `true`', () => {
  expect(balancedParens('((((()))))')).toBeTruthy();
});

test('Calling balancedParens with `()()()` returns `true`', () => {
  expect(balancedParens('()()()')).toBeTruthy();
});

test('Calling balancedParens with `doThis(hello(okay()))` returns `true`', () => {
  expect(balancedParens('doThis(hello(okay()))')).toBeTruthy();
});

test('Calling balancedParens with `Hello there every buddy` returns `true`', () => {
  expect(balancedParens('Hello there every buddy')).toBeTruthy();
});

test('Calling balancedParens with `((((())))` returns `false`', () => {
  expect(balancedParens('((((())))')).toBeFalsy();
});

test('Calling balancedParens with `()())` returns `false`', () => {
  expect(balancedParens('()())')).toBeFalsy();
});

test('Calling balancedParens with `doThis(hello(okay())` returns `false`', () => {
  expect(balancedParens('doThis(hello(okay())')).toBeFalsy();
});

test('Calling balancedParens with `(` returns `false`', () => {
  expect(balancedParens('(')).toBeFalsy();
});

test('Calling balancedParens with `)` returns `false`', () => {
  expect(balancedParens(')')).toBeFalsy();
});

test('Calling balancedParens with `)(` returns `false`', () => {
  expect(balancedParens(')(')).toBeFalsy();
});
