/* This has been refactored to be scalable; check out planet.js for the final product! */

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
    if (mercuryLifeExpectancy < 0) {
      return Math.abs(mercuryLifeExpectancy);
    }
    return mercuryLifeExpectancy;
  }
}