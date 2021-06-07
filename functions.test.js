import { getName } from './functions';

describe('Get a name from an object', () => {
  it('This will grab the value of a name key', () => {
    const spot = { name: "spot", age: 5, weight: "20 lbs" };
    const actualOne = getName(spot);

    const character = { _id: "5cf5679a915ecad153ab68c9", name: "Aang" };
    const actualTwo = getName(character);
    expect(actualOne).toEqual('spot');
    expect(actualTwo).toEqual('Aang');
  });
});