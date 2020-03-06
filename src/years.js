/* eslint-disable no-undef */
import { Person } from './person';

export class Years extends Person {
  constructor(age, lifeExpectancy) {
    super(age, lifeExpectancy); 
    this.planetPercentages = {
      mercury: .24,
      venus: .62,
      mars: 1.88,
      jupiter: 11.86
  }

  planetYears(planet) {
    let planet = planet.toLowerCase();
    return this.age / this.planetPercentages[planet];
  }

  // lifeExpectancy() {
  //   let planetLifeExpectancy = (this.userLifeExpectancy - this.userAge) / this.earthYearPercentage;

  //   planetLifeExpectancy = parseFloat(planetLifeExpectancy.toFixed(2));

  //   if (planetLifeExpectancy < 0) {
  //     return `Congrats! You beat father time! You've lived ${Math.abs(planetLifeExpectancy)} extra years left on ${this.planetName}!`;
  //   }
  //   return planetLifeExpectancy;
  // }

}