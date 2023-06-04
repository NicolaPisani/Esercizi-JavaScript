function getRandomNumber() {
  return new Promise((resolve, reject) => {
    if (isLogged) {
      const randomNumber = Math.random();
      resolve(randomNumber);
    } else {
      reject(new Error("Utente non loggato"));
    }
  });
}

function getUserData(number) {
  return new Promise((resolve, reject) => {
    if (number > 0.5) {
      const userData = { name: "John", age: 24 };
      resolve(userData);
    } else {
      reject(new Error("Numero inferiore a 0.5"));
    }
  });
}

const isLogged = true;

getRandomNumber()
  .then((number) => getUserData(number))
  .then((userData) => console.log(userData))
  .catch((error) => console.log(error.message));
