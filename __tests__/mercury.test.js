/* eslint-disable no-undef */
import { Mercury } from './../src/mercury';

describe('Mercury', () => {

  test(`Should correctly create a Mercury class with a constructor function and name property`, () => {
    let mercury = new Mercury('Mercury');
    expect(mercury.name).toEqual('Mercury');
  });

  test(`Should have "earthYearPercentage" property that returns .24`, () => {
    let mercury = new Mercury('Mercury');
    expect(mercury.earthYearPercentage).toEqual(.24);
  });

  test(`Should have a calculateAge method`, () => {
    let mercury = new Mercury('Mercury');
    expect(mercury.calculateAge(10)).toBeTruthy();
  });

  test(`calculateAge method take in an argument, and return it unchanged`, () => {
    let mercury = new Mercury('Mercury');
    expect(mercury.calculateAge(10)).toEqual(10);
  });

});