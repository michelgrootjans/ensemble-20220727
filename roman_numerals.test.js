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
  test('11 should not return a value', () => {
    expect(numberToNumerals(11)).toEqual('XI')
  });
});
