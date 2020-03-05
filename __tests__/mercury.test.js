/* eslint-disable no-undef */

/* This has been refactored to be scalable; check out planet.test.js for the final product! */

import { Mercury } from './../src/mercury';

describe('Mercury', () => {
  let mercury;

  beforeEach(() => {
    mercury = new Mercury('Mercury');
  });
 
  test(`Should correctly create a Mercury class with a constructor function and planetName property`, () => {
    expect(mercury.planetName).toEqual('Mercury');
  });

  test(`Should have "earthYearPercentage" property that returns .24`, () => {    expect(mercury.earthYearPercentage).toEqual(.24);
  });

  test(`Should have a calculateAge method`, () => {
    expect(mercury.calculateAge(10)).toBeTruthy();
  });

  test(`Should have a calculateAge method that correctly calculates the 'Mercury Years' of a person, based on their 'Earth Years' age`, () => {
    expect(mercury.calculateAge(10)).toEqual(41.67);
  });

  test(`Should have a lifeExpectancy function that takes a user's age and earth life expectancy, and returns their Mercury life expectancy back to them.`, () => {
    expect(mercury.lifeExpectancy(10, 85)).toBeCloseTo(312.5);
  });
  test(`If a user's life expectancy is greater than their age on Mercury, return their Mercy life expectancy as a positive number`, () => {
    expect(mercury.lifeExpectancy(90, 85)).toBeCloseTo(20.83);
  });
 
});