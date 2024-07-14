import {describe, expect, test} from '@jest/globals';
import {multiply, sum} from '../index';

// test for addition function
describe('sum module', () => {
  test('adds 1 + 2 to equal 3', () => {
    expect(sum(1, 2)).toBe(3);
  });
});

// test for multiplication function
describe('multiply module', () => {
  test('multiplies 1 * 2 to equal 2', () => {
    expect(multiply(1,2)).toBe(2)
  })
})