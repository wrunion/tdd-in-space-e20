/* eslint-disable no-console */
export class Planet {
  constructor(planetName, earthYearPercentage, userAge, userLifeExpectancy) {
    this.planetName = planetName;
    this.earthYearPercentage = earthYearPercentage;
    this.userAge = userAge;
    this.userLifeExpectancy = userLifeExpectancy;
  }

  calculateAge() {
    let planetYears = this.userAge / this.earthYearPercentage;
    return parseFloat(planetYears.toFixed(2));
  }

  lifeExpectancy() {
    let planetLifeExpectancy = (this.planetYears - this.userAge) / this.earthYearPercentage;
    // if (mercuryLifeExpectancy <= 5) {
    //   return `Time's almost up! You have ${mercuryLifeExpectancy} years left on ${this.planetName}`;
    // }  
    if (planetLifeExpectancy < 0) {
      return Math.abs(planetLifeExpectancy);
    }
    //   return `Congrats! You beat father time! You've lived ${Math.abs(mercuryLifeExpectancy)} extra years left on ${this.planetName}!`;
    // }
    return planetLifeExpectancy;
  }
}