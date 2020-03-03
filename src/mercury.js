/* eslint-disable no-console */
export class Mercury {
  constructor(planetName) {
    this.planetName = planetName;
    this.earthYearPercentage = .24;
  }
  calculateAge(earthYears) {
    let mercuryYears = earthYears / this.earthYearPercentage;
    return parseFloat(mercuryYears.toFixed(2));
  }

  lifeExpectancy(earthAge, earthLifeExpectancy) {
    let mercuryLifeExpectancy = (earthLifeExpectancy - earthAge) / this.earthYearPercentage;
    // if (mercuryLifeExpectancy <= 5) {
    //   return `Time's almost up! You have ${mercuryLifeExpectancy} years left on ${this.planetName}`;
    // }  
    if (mercuryLifeExpectancy < 0) {
      return Math.abs(mercuryLifeExpectancy);
    }
    //   return `Congrats! You beat father time! You've lived ${Math.abs(mercuryLifeExpectancy)} extra years left on ${this.planetName}!`;
    // }
    return mercuryLifeExpectancy;
  }
}