
const { readFileSync, writeFileSync,  } = require('fs');

class Database {
  constructor() {
    this.FILE_NAME = 'heroes.json';
  }

  // READ
  getData = async () => {
    const file = await readFileSync(this.FILE_NAME, 'utf8');

    return JSON.parse(file.toString());
  };

  list = async id => {
    const data = await this.getData(); 

    const dataFilter = data.filter(item => id ? (item.id === id) : true);

    return dataFilter;
  };

  //CREATE
  writeFile = async data => {
    await writeFileSync(this.FILE_NAME, JSON.stringify(data));
    return true;
  };

  register = async hero => {
    const heroes = await this.getData();
    const id = hero.id <= 2 ? hero.id : Date.now();
    const completeHero = {
      id,
      ...hero,
    };
    const finalData = [
      ...heroes,
      completeHero,
    ];

    const result = await this.writeFile(finalData);
    return result;
  };

  //DELETE
  delete = async id => {
    const heroes = await this.getData();

    const heroIndex = heroes.findIndex(item => item.id === parseInt(id));

    if(heroIndex === -1) throw Error('Hero not found');

    heroes.splice(heroIndex, 1);

    return await this.writeFile(heroes);
  };

  //UPDATE
  update = async (hero, heroUpdates) => {
    const heroes = await this.getData();

    const heroFound = heroes.findIndex(item => item.id === hero.id);
    
    if(heroFound === -1) {
      const updatedHero = {
        ...hero,
        ...heroUpdates,
      }

      return await this.writeFile([
        updatedHero,
        ...heroes,
      ])
    };

    const updatedHero = {
      ...heroes[heroFound],
      ...heroUpdates,
    };
    
    heroes.splice(heroFound, 1);

    return await this.writeFile([
      updatedHero,
      ...heroes,
    ]);
  }
};

module.exports = new Database();