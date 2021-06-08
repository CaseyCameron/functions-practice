import {
  getName,
  copyAndPush,
  capitalizeAndFilter,
  fetchQuotes
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

  it.skip('return a new array with the original and new item @ end', () => {
    const numbers = [1, 2, 3];
    const actual = copyAndPush(numbers, 4);

    expect(actual).toEqual([numbers, [1, 2, 3, 4]]);
  });

  it.skip('capitalize & return an array of strings, but return none that begins with F/f', () => {
    const strings = ['hello', 'howdy', 'fine', 'Fabulous'];
    const actual = capitalizeAndFilter(strings);

    expect(actual).toEqual(['HELLO', 'HOWDY']);
  });

  it('Grabs a single quote, name, and image from Futurama API', async () => {
    const futuramaQuote = await fetchQuotes(2);

    //expect(futuramaQuote.status).toBe(200);
    expect(futuramaQuote).toEqual(
      {
        name: expect.any(String),
        text: expect.any(String),
        image: expect.any(String)
      }
    );
  })
});