import {
  getName,
  copyAndPush
} from './functions';

describe('TDD practice', () => {
  it.skip('This will grab the value of a name key', () => {
    const spot = { name: "spot", age: 5, weight: "20 lbs" };
    const actualOne = getName(spot);

    const character = { _id: "5cf5679a915ecad153ab68c9", name: "Aang" };
    const actualTwo = getName(character);

    expect(actualOne).toEqual('spot');
    expect(actualTwo).toEqual('Aang');
  });

  it('return a new array with the original and new item @ end', () => {
    const numbers = [1, 2, 3];
    const actual = copyAndPush(numbers, 4);

    expect(actual).toEqual([numbers, [1, 2, 3, 4]]);
  });
});