const { get } = require('axios');

const URL = 'https://swapi.co/api/people';

async function getPeople(name) {
  const url = `${ URL }/?search=${ name }&format=json`;

  const r2d2 = await get(url);

  const result = r2d2.data.results.map(item => {
    return { 
      name: item.name,
      height: item.height,
    }
  });

  return result;
};

module.exports = {
  getPeople
}