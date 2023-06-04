const promise = new Promise((resolve, reject) => {
    const number = 15;
    

  if (number > 10) {
    resolve(number);
  } else {
    reject("Il numero è minore o uguale a 10");
  }
});

promise
  .then((value) => {
    console.log("Il valore di number è:", value);
  })
  .catch((error) => {
    console.log("Errore:", error);
  });