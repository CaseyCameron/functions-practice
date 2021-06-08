import request from 'superagent';
import fetch from 'node-fetch';

export function getName({ name } = object) {
  return name;
};

export function copyAndPush(arr, num) {
  const copyArr = [...arr];
  copyArr.push(num);
  console.log(copyArr);
  return [arr, copyArr];
}

export function capitalizeAndFilter(arr) {
  let filteredArr = [];
  const regEx = /[fF]/g;
  filteredArr = arr.filter(i => !i.charAt(0).match(regEx))
  return filteredArr.map(i => i.toUpperCase());
}

export async function fetchQuotes(count) {
  try {
    const response = await request
      .get(`http://futuramaapi.herokuapp.com/api/quotes/${count}`);

    const data = response.body[1];

    return {
      name: data.character,
      text: data.quote,
      image: data.image
    };
  }
  catch (err) {
    console.log(err);
    res.status(500).json({ error: err.message });
  }
}

export function useFetchForQuotes(count) {
  return fetch(`http://futuramaapi.herokuapp.com/api/quotes/${count}`)
    .then(res => res.json())
    .then(console.log())
    .then(data => ({
      name: data[0].character,
      text: data[0].quote,
      image: data[0].image
    }));
}
