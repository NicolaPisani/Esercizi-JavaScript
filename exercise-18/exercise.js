
function repeatHello(callback) {
  setInterval(callback, 1000);
}

const printHello = () => {
  console.log("Ciao");
};

function repeatHello() {
  let counter = 0;
  const intervalId = setInterval(() => {
    console.log("Hello");
    counter++;
    if (counter === 5) {
      clearInterval(intervalId);
    }
  }, 1000);
}

repeatHello(printHello);