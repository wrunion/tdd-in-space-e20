/* eslint-disable no-unused-vars */
export class Planets {
  constructor(age, lifeExpectancy) {
    this.age = age;
    this.lifeExpectancy = lifeExpectancy;
  }

  calculateAge(planet) {
    planet = planet.toLowerCase();
    if (planet === "mercury") { const percentageOfEarthYear = .24; }
    if (planet === "venus" ) { const percentageOfEarthYear = .62; }
    if (planet === "mars") { const percentageOfEarthYear = 1.88; }
    if (planet === "jupiter") {const percentageOfEarthYear = 11.86; }

    // eslint-disable-next-line no-undef
    const planetYears = this.userAge / percentageOfEarthYear;
    return parseFloat(planetYears.toFixed(2));
  }

  lifeExpectancy(planet) {
    planet = planet.toLowerCase();
    if (planet === "mercury") { const percentageOfEarthYear = .24; }
    if (planet === "venus" ) { const percentageOfEarthYear = .62; }
    if (planet === "mars") { const percentageOfEarthYear = 1.88; }
    if (planet === "jupiter") {const percentageOfEarthYear = 11.86; }

    // eslint-disable-next-line no-undef
    let planetLifeExpectancy = (this.age - this.lifeExpectancy) / percentageOfEarthYear;
    planetLifeExpectancy = parseFloat(planetLifeExpectancy.toFixed(2));

    if (planetLifeExpectancy < 0) {
      return `Congrats! You beat father time! You've lived ${Math.abs(planetLifeExpectancy)} extra years left on ${this.planetName}!`;
    }
    return planetLifeExpectancy;
  }
  
}