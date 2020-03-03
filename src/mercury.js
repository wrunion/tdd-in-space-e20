export class Mercury {
  constructor(name) {
    this.name = name;
    this.earthYearPercentage = .24;
  }
  calculateAge(earthYears) {
    let mercuryYears = earthYears / this.earthYearPercentage;
    return parseFloat(mercuryYears.toFixed(2));
  }
  lifeExpectancy(earthYears) {
    return earthYears;
  }
}