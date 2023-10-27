import calculator from './calculator';

test('adds a + b', () => {
  expect(calculator.add(1, 2)).toBe(3);
});

test('subtracts a - b', () => {
  expect(calculator.subtract(5, 2)).toBe(3);
});

test('multiplys a * b', () => {
  expect(calculator.multiply(5, 2)).toBe(10);
});

test('divides a / b', () => {
  expect(calculator.divide(10, 2)).toBe(5);
});
