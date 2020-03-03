/* eslint-disable no-undef */
import { Mercury } from './../src/mercury';

describe('Mercury', () => {
  let mercury;

  beforeEach(() => {
    mercury = new Mercury('Mercury');
  });
 
  test(`Should correctly create a Mercury class with a constructor function and name property`, () => {
    expect(mercury.name).toEqual('Mercury');
  });

  test(`Should have "earthYearPercentage" property that returns .24`, () => {    expect(mercury.earthYearPercentage).toEqual(.24);
  });

  test(`Should have a calculateAge method`, () => {
    expect(mercury.calculateAge(10)).toBeTruthy();
  });

  test(`Should have a calculateAge method that correctly calculates the 'Mercury Years' of a person, based on their 'Earth Years' age`, () => {
    expect(mercury.calculateAge(10)).toEqual(41.67);
  });

  test(`Should have a lifeExpectancy function that takes in a user's earth year life expectancy, and returns it back to them`, () => {
    expect(mercury.lifeExpectancy(10)).toEqual(10);
  });

  test(`Should have a lifeExpectancy function that takes a user's age and earth life expectancy, and returns their Mercury life expectancy back to them.`, () => {
    expect(mercury.lifeExpectancy(10, 85)).toBeCloseTo(312.5);
  });

});