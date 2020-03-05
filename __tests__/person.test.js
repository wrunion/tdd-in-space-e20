/* eslint-disable no-undef */

import { Person } from './../src/person';

describe('Person', () => {
  
  test('Should be a class with name property', () => {
    let person = new Person('George');
    expect(person.name).toEqual('George');
  });
  test(`Should have an age property`, () => {
    let person = new Person('Josephine', 45);
    expect(person.age).toEqual(45);
  });
  test(`Should have a "gender" property that returns either "male", "female", or "other"`, () => {
    let person = new Person('Jojo', 15, 'female');
    expect(person.gender).toEqual('female');
  });
  test(`Should have an earthLifeExpectancy() function that returns a value based on gender value`, () => {
    let person = new Person('Chris', 45, 'other');
    expect(person.earthLifeExpectancy()).toEqual(72.0);
  });

});