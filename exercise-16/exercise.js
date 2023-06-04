function printAsyncName(callback, name) {
  setTimeout(callback, 1000); // Esegue il callback dopo 1 secondo
  setTimeout(() => {
    console.log(name); // Stampa il nome dopo 2 secondi
  }, 2000);
}

function callback() {
  console.log("Hello");
}

printAsyncName(callback, "Nico");