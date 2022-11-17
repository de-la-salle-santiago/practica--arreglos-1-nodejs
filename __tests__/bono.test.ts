/* eslint-disable */
// @ts-nocheck
import { expect, test, describe } from 'vitest'
import { bono } from '@/index.js';

describe('main', () => {
  test.each([[[4, 1, 10, 6, 8], [1, 4, 6, 8, 10]], [[6, 2, 0], [0, 2, 6]], [[20, 31, 8, 5], [5, 8, 20, 31]]])("Arr(%o)", (arr, expected) => {
    expect(bono(arr)).toStrictEqual(expected);
  });
})