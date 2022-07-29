const numberToNumerals = require("./roman_numerals");

describe('roman numerals', () => {
  test('1 -> I', () => {
    expect(numberToNumerals(1)).toEqual('I')
  })
  test('2 -> II', () => {
    expect(numberToNumerals(2)).toEqual('II')
  })
  test('3 -> III', () => {
    expect(numberToNumerals(3)).toEqual('III')
  })
  test('4 -> IV', () => {
    expect(numberToNumerals(4)).toEqual('IV')
  })
  test('5 -> V', () => {
    expect(numberToNumerals(5)).toEqual('V')
  })
  test('6 -> V1', () => {
    expect(numberToNumerals(6)).toEqual('VI')
  })
  test('7 -> VII', () => {
    expect(numberToNumerals(7)).toEqual('VII')
  })
  test('8 -> VIII', () => {
    expect(numberToNumerals(8)).toEqual('VIII')
  })
  test('9 -> IX', () => {
    expect(numberToNumerals(9)).toEqual('IX')
  })
  test('10 -> X', () => {
    expect(numberToNumerals(10)).toEqual('X')
  })
  test('11 -> XI', () => {
    expect(numberToNumerals(11)).toEqual('XI')
  });
  test('12 -> XII', () => {
    expect(numberToNumerals(12)).toEqual('XII')
  });
  test('13 -> XIII', () => {
    expect(numberToNumerals(13)).toEqual('XIII')
  });
});
