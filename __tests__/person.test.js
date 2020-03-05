/* eslint-disable no-undef */

import { Person } from './../person.js';

describe('Person', () => {
  
  test('Should be a class with name property', () => {
    let person = new Person('George');
    expect(person.name()).toEqual('George');
  });


});