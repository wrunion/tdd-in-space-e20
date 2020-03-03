/* eslint-disable no-undef */
import { Mercury } from '/./../src/mercury.js';

describe('Mercury', () => {

  test(`Should correctly create a Mercury class with a constructor function and name property`, () => {
    let mercury = new Mercury('Mercury');
    expect(mercury.name).toEqual('Mercury');
  });

});