const palindromes = require('./palindromes')

describe('palindromes', () => {
  test('works with single words', () => {
    expect(palindromes('racecar')).toBe(true);
  });
  test('works with punctuation ', () => {
    expect(palindromes('racecar!')).toBe(true);
  });
  test('works with upper-case letters ', () => {
    expect(palindromes('Racecar!')).toBe(true);
  });
  test('works with multiple words', () => {
    expect(palindromes('A car, a man, a maraca.')).toBe(true);
  });
  test('works with multiple words', () => {
    expect(palindromes('Animal loots foliated detail of stool lamina.')).toBe(true);
  });
  test('doesn\'t just always return true', () => {
    expect(palindromes('ZZZZ car, a man, a maracaz.')).toBe(false);
  });
  test('works with numbers in a string', () => {
    expect(palindromes('rac3e3car')).toBe(true);
  });
  test('works with unevenly spaced numbers in a string', () => {
    expect(palindromes('r3ace3car')).toBe(false);
  });
});


const palindromes2 = require('./palindromes')

describe('palindromes2', () => {
  test('works with single words', () => {
    expect(palindromes2('racecar')).toBe(true);
  });
  test('works with punctuation ', () => {
    expect(palindromes2('racecar!')).toBe(true);
  });
  test('works with upper-case letters ', () => {
    expect(palindromes2('Racecar!')).toBe(true);
  });
  test('works with multiple words', () => {
    expect(palindromes2('A car, a man, a maraca.')).toBe(true);
  });
  test('works with multiple words', () => {
    expect(palindromes2('Animal loots foliated detail of stool lamina.')).toBe(true);
  });
  test('doesn\'t just always return true', () => {
    expect(palindromes2('ZZZZ car, a man, a maracaz.')).toBe(false);
  });
  test('works with numbers in a string', () => {
    expect(palindromes2('rac3e3car')).toBe(true);
  });
  test('works with unevenly spaced numbers in a string', () => {
    expect(palindromes2('r3ace3car')).toBe(false);
  });
});