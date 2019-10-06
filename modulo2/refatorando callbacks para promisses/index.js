//para converter callback para promise automaticamente import o util que vem no node;
const util = require('util');
const gerarEndereçoAsync = util.promisify(gerarEndereço);

function gerarUsuario() {
  // quando tudo der certo = resolve;
  // quando algo der errado = reject;
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      return resolve({
        name: 'Felipe',
        age: 22,
        id: 11,
      });
    }, 1000);
  })
};

function gerarTelefone(userId) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      return resolve({
        ddd: 24,
        number: `224856${ userId }`,
      });
    }, 500);
  })
};

function gerarEndereço(userAge, callback) {
  setTimeout(() => {
    return callback(null, {
      street: 'Anna Margarida Latches Mussel',
      number: `Casa ${ userAge }`
    })
  })
};

// manipular resultado usa .then();
// manipular erro usa .catch();
const usuarioPromise = gerarUsuario();
usuarioPromise
  .then(user => {
    return gerarTelefone(user.id)
      .then(phone => {
        return {
          name: user.name,
          age: user.age,
          phone: `(${ phone.ddd }) ${ phone.number }`
        }
      })
  })
  .then(result => {
    return gerarEndereçoAsync(result.age)
      .then(address => {
        return {
          ...result,
          street: address.street,
          number: address.number,
        }
      })
  })
  .then(result => {
    console.log('Usuário: ', result);
  })
  .catch(error => {
    console.error('Deu ruim: ', error);
  });

// gerarUsuario((error, user) => {
//   if(error) {
//     console.error('Deu ruim! Usuario não encontrado');
//   }

//   gerarTelefone(user.id, (error1, phone) => {
//     if(error1) {
//       console.error('Deu ruim! Telefone não encontrado');
//     }
    
//     gerarEndereço(user.age, (error2, address) => {
//       if(error2) {
//         console.error('Deu ruim! Endereço não encontrado');
//       }

//       console.log(`
//         Olá ${ user.name }!
//         Seu número é (${ phone.ddd }) ${ phone.number }.
//         Você mora na rua ${ address.street },
//         ${ address.number }.
//       `);
//     })
//   })
// });