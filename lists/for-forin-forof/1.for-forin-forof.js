
const service = require('./service');

const getName = async () => {
  const names = [];
  try {
    const result = await service.getPeople('f');

    //COMANDO FOR

    // for (let index = 0; index <= result.results.length - 1; index++) {
    //   const person = result.results[index];
    //   const name = person.name;

    //   names.push(name);
    // }

    //COMANDO FOR IN

    // for (const key in result.results) {
    //   const person = result.results[key];
    //   const name = person.name;

    //   names.push(name);
    // }

    //COMANDO FOR OF

    // for (person of result.results) {
    //   names.push(person.name);
    // }

  } catch (error) {
    console.error(error);
  }

  console.log(names);
};

getName();