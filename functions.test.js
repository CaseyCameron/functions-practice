import { getName } from './functions';

describe('Get a name from an object', () => {
  it('This will grab the value of a name key', () => {
    const spot = { name: "spot", age: 5, weight: "20 lbs" };
    getName(spot);
  });
});