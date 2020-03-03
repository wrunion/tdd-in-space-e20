/* eslint-disable no-console */
export class Mercury {
  constructor(name) {
    this.name = name;
    this.earthYearPercentage = .24;
  }
  calculateAge(earthYears) {
    let mercuryYears = earthYears / this.earthYearPercentage;
    return parseFloat(mercuryYears.toFixed(2));
  }

  lifeExpectancy(earthAge, earthLifeExpectancy) {
    let mercuryLifeExpectancy = (earthLifeExpectancy - earthAge) / this.earthYearPercentage;
    // console.log(`Your Mercury life expectancy is ${mercuryLifeExpectancy}!`);
    return mercuryLifeExpectancy;
  }
}