/* eslint-disable no-undef */
import { Planet } from './../src/planet';

describe('Planet', () => {

  test(`Should contain a constructor function with planetName property`, () => {
    let planet = new Planet('Mercury');
    expect(planet.planetName).toEqual('Mercury');
  });

  test(`Should have "earthYearPercentage" property that returns that planet's percentage of years compared to earth years`, () => {    
    let planet = new Planet('Mercury', .24);
    expect(planet.earthYearPercentage).toEqual(.24);
  });

  // test(`Should have a calculateAge method`, () => {
  //   expect(mercury.calculateAge(10)).toBeTruthy();
  // });

  // test(`Should have a calculateAge method that correctly calculates the 'Mercury Years' of a person, based on their 'Earth Years' age`, () => {
  //   expect(mercury.calculateAge(10)).toEqual(41.67);
  // });

  // test(`Should have a lifeExpectancy function that takes a user's age and earth life expectancy, and returns their Mercury life expectancy back to them.`, () => {
  //   expect(mercury.lifeExpectancy(10, 85)).toBeCloseTo(312.5);
  // });

  // test(`If user's life expectancy is less than 5 years on Mercury, a special message should be displayed`, () => {
  //   expect(mercury.lifeExpectancy(80, 85)).toEqual(`Time's almost up! You have ${mercuryLifeExpectancy} years left on Mercury!`); 
  // });
  // test(`If a user's life expectancy is greater than their age on Mercury, return a special message`, () => {
  //   expect(mercury.lifeExpectancy(90, 85)).toBeCloseTo()
  // });
  // test(`If a user's life expectancy is greater than their age on Mercury, return their Mercy life expectancy as a positive number`, () => {
  //   expect(mercury.lifeExpectancy(90, 85)).toBeCloseTo(20.83);
  // });
 
});