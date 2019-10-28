
const { readFileSync } = require('fs');

class Database {
  constructor() {
    this.FILE_NAME = 'heroes.json';
  }

  getData = async () => {
    const file = await readFileSync(this.FILE_NAME, 'utf8');

    return JSON.parse(file.toString());
  }

  list = async id => {
    const data = await this.getData(); 

    const dataFilter = data.filter(item => id ? (item.id === id) : true);

    return dataFilter;
  }
};

module.exports = new Database();