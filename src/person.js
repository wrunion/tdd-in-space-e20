export class Person {
  constructor(name, age, gender) {
    this.name = name;
    this.age = age;
    this.gender = gender;
  }
  /* Based on worldwide WHO statistics */ 
  earthLifeExpectancy() {
    if (this.gender === 'female') { return 74; }
    if (this.gender === 'male') { return 70; }
    if (this.gender === 'other') { return 72; }
    return 72; // Default value, equal to WHO average life expectancy globally
  }
}