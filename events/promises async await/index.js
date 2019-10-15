//para converter callback para promise automaticamente import o util que vem no node;
const util = require('util');
const gerarEndereçoAsync = util.promisify(gerarEndereço);

function gerarUsuario() {
  // quando tudo der certo = resolve;
  // quando algo der errado = reject;
  return new Promise((resolve, reject) => {
    return resolve({
      name: 'Felipe',
      age: 22,
      id: 11,
    });
  })
};

function gerarTelefone(userId) {
  return new Promise((resolve, reject) => {
    return resolve({
      ddd: 24,
      number: `224856${ userId }`,
    });
  })
};

function gerarEndereço(userAge, callback) {
  return callback(null, {
    street: 'Anna Margarida Latches Mussel',
    number: `Casa ${ userAge }`
  });
};

const main = async () => {
  try {
    console.time('Time: ');

    const user = await gerarUsuario();
    
    const result = await Promise.all([
      gerarTelefone(user.id),
      gerarEndereçoAsync(user.age),
    ]);
    
    const phone = result[0];
    const address = result[1];

    console.log(`
      Nome: ${ user.name },
      Telefone: (${ phone.ddd }) ${ phone.number },
      Endereço: ${ address.street }, ${ address.number },
    `);

    console.timeEnd('Time: ');
  } catch (error) {
    console.error('DEU RUIM!', error);
  }
}
main();