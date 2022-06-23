const jeffBuysCake = (cakeType) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (cakeType === 'black forest') {
        resolve('Black forest cake!');
      } else {
        reject('no cake(');
      }
    }, 3000);
  });
};

const promise = jeffBuysCake('Actually, I bought something else...')
  .then((cake) => console.log(cake))
  .catch((nocake) => console.log(nocake));
console.log(promise);
