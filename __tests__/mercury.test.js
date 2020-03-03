/* eslint-disable no-undef */
import { Mercury } from '/./../src/mercury';

describe('Mercury', () => {

  test(`Should correctly create a Mercury object with a name property`, () => {
    let mercury = new Mercury('Mercury');
    expect(mercury.name).toEqual('Mercury');
  });

});