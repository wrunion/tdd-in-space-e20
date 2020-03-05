export class Person {
  constructor(name, age, gender) {
    this.name = name;
    this.age = age;
    this.gender = gender;
  }
  /* The numbers below are based on the worldwide WHO statistics for life expectancy around the globe, broken down by gender. */ 
  earthLifeExpectancy() {
    if (this.gender === 'female') { return 74.2; }
    if (this.gender === 'male') { return 69.81; }
    if (this.gender === 'other') { return 72; }
    return 72; // Default value based on the average life expectancy in 2016, according to WHO (World Health Organization.) It's also the value I used for "other" genders, since we don't have data for nonbinary gender life expectancy right now.
  }
}