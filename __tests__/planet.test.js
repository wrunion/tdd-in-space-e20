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

  test(`Should have a calculateAge method that correctly calculates the 'Planet Years' of a person, based on their 'Earth Years' age`, () => {
    let planet = new Planet('Mercury', .24, 10);
    expect(planet.calculateAge()).toEqual(41.67);
  });

  test(`Should have a lifeExpectancy function that takes a user's age and earth life expectancy, and returns their Mercury life expectancy back to them.`, () => {
    let planet = new Planet('Mercury', .24, 10, 85);
    expect(planet.lifeExpectancy()).toBeCloseTo(312.5);
  });

  test(`If a user's life expectancy is greater than their age on Mercury, return a special message`, () => {
    let planet = new Planet('Mercury', .24, 90, 85);
    expect(planet.lifeExpectancy()).toEqual(`Congrats! You beat father time! You've lived 20.83 extra years left on Mercury!`)
  });
 
});