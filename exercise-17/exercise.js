function repeatHello(callback) {
  setInterval(callback, 1000);
}

const printHello = () => {
  // usare funzione di callback come freccia "() => {}" ha diversi vantaggi come ; una sintassi più concisa , non lega il proprio valore 'this' ma lo eredita dall'ambito circostante e inifine possono essere utilizzate per creare facilmente funzioni anonime 
  console.log("Ciao");
};

repeatHello(printHello);