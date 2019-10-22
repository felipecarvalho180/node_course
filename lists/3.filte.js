const { getPeople } = require('./service');

const handleFilter = async () => {
  const { results } = await getPeople('a');

  let familyLars;
  let names;
  try {
    familyLars = results.filter(({ name }) => {
      return name.toLowerCase().indexOf('lars') !== -1;
    });

    names = familyLars.map(({ name }) => name);
  } catch (error) {
    console.error(error);
  }

  console.log('map:', names);
};

handleFilter();