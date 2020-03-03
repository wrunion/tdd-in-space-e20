export class Mercury {
  constructor(name) {
    this.name = name;
    this.earthYearPercentage = .24;
  }
  calculateAge(earthYears) {
    let mercuryYears = earthYears / .24;
    return parseFloat(mercuryYears.toFixed(2));
  }
}