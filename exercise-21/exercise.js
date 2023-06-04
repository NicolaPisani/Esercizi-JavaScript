class CustomError extends Error {
  constructor(message) {
    super(message);
    this.name = "CustomError";
  }
}

const isLogged = true;

function getRandomNumber() {
  return new Promise((resolve, reject) => {
    if (isLogged) {
      const randomNumber = Math.random();
      resolve(randomNumber);
    } else {
      reject(new CustomError("Utente non loggato"));
    }
  });
}

function getUserData(number) {
  return new Promise((resolve, reject) => {
    if (number > 0.5) {
      const userData = { name: "John", age: 24 };
      resolve(userData);
    } else {
      reject(new CustomError("Numero inferiore a 0.5"));
    }
  });
}

getRandomNumber()
  .then((number) => getUserData(number))
  .then((userData) => {
    console.log(userData);
  })
  .catch((error) => {
    if (error instanceof CustomError) {
      console.error("Errore personalizzato:", error.message);
    } else {
      console.error("Errore generico:", error.message);
    }
  })
  .finally(() => {
    console.log("Esecuzione completata.");
  });
