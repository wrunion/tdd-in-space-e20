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

});