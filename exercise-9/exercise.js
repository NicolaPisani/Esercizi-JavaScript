
function sum(num1, num2, num3) {
  return num1 + num2 + num3;
}

const numbers = [1, 2, 3];
console.log(sum(...numbers)); //utilizziamo lo spread operator (...) per passare gli elementi dell'array come argomenti separati alla funzione 

