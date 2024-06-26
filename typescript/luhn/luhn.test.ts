import { valid } from './luhn'

describe('Luhn', () => {
  it('single digit strings can not be valid', () => {
    expect(valid('1')).toBeFalsy()
  })

  test('a single zero is invalid', () => {
    expect(valid('0')).toBeFalsy()
  })

  test('a simple valid SIN that remains valid if reversed', () => {
    expect(valid('059')).toBeTruthy()
  })

  test('a simple valid SIN that becomes invalid if reversed', () => {
    expect(valid('59')).toBeTruthy()
  })

  test('a valid Canadian SIN', () => {
    expect(valid('055 444 285')).toBeTruthy()
  })

  test('invalid Canadian SIN', () => {
    expect(valid('055 444 286')).toBeFalsy()
  })

  test('invalid credit card', () => {
    expect(valid('8273 1232 7352 0569')).toBeFalsy()
  })

  test('invalid long number with an even remainder', () => {
    expect(valid('1 2345 6789 1234 5678 9012')).toBeFalsy()
  })

  test('invalid long number with a remainder divisible by 5', () => {
    expect(valid('1 2345 6789 1234 5678 9013')).toBeFalsy()
  })

  test('valid number with an even number of digits', () => {
    expect(valid('095 245 88')).toBeTruthy()
  })

  test('valid number with an odd number of spaces', () => {
    expect(valid('234 567 891 234')).toBeTruthy()
  })

  test('valid strings with a non-digit added at the end become invalid', () => {
    expect(valid('059a')).toBeFalsy()
  })

  test('valid strings with punctuation included become invalid', () => {
    expect(valid('055-444-285')).toBeFalsy()
  })

  test('valid strings with symbols included become invalid', () => {
    expect(valid('055# 444$ 285')).toBeFalsy()
  })

  test('single zero with space is invalid', () => {
    expect(valid(' 0')).toBeFalsy()
  })

  test('more than a single zero is valid', () => {
    expect(valid('0000 0')).toBeTruthy()
  })

  test('input digit 9 is correctly converted to output digit 9', () => {
    expect(valid('091')).toBeTruthy()
  })

  test('very long input is valid', () => {
    expect(valid('9999999999 9999999999 9999999999 9999999999')).toBeTruthy()
  })

  test('valid luhn with an odd number of digits and non zero first digit', () => {
    expect(valid('109')).toBeTruthy()
  })

  test("using ascii value for non-doubled non-digit isn't allowed", () => {
    expect(valid('055b 444 285')).toBeFalsy()
  })

  test("using ascii value for doubled non-digit isn't allowed", () => {
    expect(valid(':9')).toBeFalsy()
  })

  test("non-numeric, non-space char in the middle with a sum that's divisible by 10 isn't allowed", () => {
    expect(valid('59%59')).toBeFalsy()
  })
})
