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

  test(`Should have a calculateAge method that takes in an argument, and return it unchanged`, () => {
    expect(mercury.calculateAge(10)).toEqual(10);
  });

});