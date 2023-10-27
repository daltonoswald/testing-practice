const capitalize = require('./capitalize');

test('capitalizes first letter', () => {
  expect(capitalize('testing')).toBe('Testing');
});
