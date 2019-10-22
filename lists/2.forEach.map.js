
const service = require('./service');

const handleForEachAndMap = async () => {
  let names = [];
  try {
    const result = await service.getPeople('');
    
    //COMANDO FOR EACH.

    // result.results.forEach(({ name }) => {
    //   names.push(name);
    // })

    //COMANDO MAP.

    names = result.results.map(({ name }) => name);
    
  } catch (error) {
    console.error(error);
  }

  console.log(names);
}

handleForEachAndMap();