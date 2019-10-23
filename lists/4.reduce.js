const { getPeople } = require('./service');

const handleReduce = async () => {
  const { results } = await getPeople('a');
  const height = results.map(({ height }) => parseInt(height));
  console.log(height);

  const total = height.reduce((last, next) => {
    return last + next;
  });

  console.log(total);
};

handleReduce();