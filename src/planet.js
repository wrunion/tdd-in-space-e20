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
    let planetLifeExpectancy = (this.userLifeExpectancy - this.userAge) / this.earthYearPercentage;

    planetLifeExpectancy = parseFloat(planetLifeExpectancy.toFixed(2));

    if (planetLifeExpectancy < 0) {
      return `Congrats! You beat father time! You've lived ${Math.abs(planetLifeExpectancy)} extra years left on ${this.planetName}!`;
    }
    return planetLifeExpectancy;
  }
}