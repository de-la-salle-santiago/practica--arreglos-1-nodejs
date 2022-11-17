/* eslint-disable */
// @ts-nocheck
import { expect, test, describe } from 'vitest'
import { tarea1, tarea2, tarea3, bono } from '@/index.js';

describe('main', () => {
  test.each([[[4, 1, 10, 6, 8], 29], [[6, 2, 0], 8], [[20, 31, 8], 59]])("Arr(%o)", (arr, expected) => {
    expect(tarea1(arr)).toBe(expected);
  });
  test.each([[[4, 1, 10, 6, 8], 10], [[6, 2, 0], 6], [[20, 31, 8], 31]])("Arr(%o)", (arr, expected) => {
    expect(tarea2(arr)).toBe(expected);
  });
  test.each([[[4, 1, 10, 6, 8], 29 / 5], [[6, 2, 0], 8 / 3], [[20, 31, 8, 5], 64 / 4]])("Arr(%o)", (arr, expected) => {
    expect(tarea3(arr)).toBe(expected);
  });

})
