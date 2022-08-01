function fizzbuzz(number) {
  let result = '';

  if (number % 3 === 0) result += 'fizz';
  if (number % 5 === 0) result += 'buzz';
  if (number % 7 === 0) result += 'bar';

  if (result !== '') return result;

  return '' + number;
}

describe('fizzbuzz', () => {
  test.each([
    [1, '1'],
    [2, '2'],
    [3, 'fizz'],
    [4, '4'],
    [5, 'buzz'],
    [6, 'fizz'],
    [7, 'bar'],
    [8, '8'],
    [9, 'fizz'],
    [10, 'buzz'],
    [14, 'bar'],
    [15, 'fizzbuzz'],

    [21, 'fizzbar'],

    [30, 'fizzbuzz'],

    [35, 'buzzbar'],

    [3 * 5 * 7, 'fizzbuzzbar'],

  ])('%i => %s', (input, expected) => {
    expect(fizzbuzz(input)).toEqual(expected);
  });
});