const caesarCipher = require('./caesarCipher');

test('offsets characters by key', () => {
  expect(caesarCipher('abc', 2)).toBe('cde');
});

test('offsets characters by key', () => {
  expect(caesarCipher('xyz', 2)).toBe('zab');
});
