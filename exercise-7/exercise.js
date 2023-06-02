// function sum(num1, num2, num3, num4, num5) {
//     return num1 + num2 + num3 + num4 + num5;
// }

// console.log(sum(1, 2, 3, 4, 5));

function sum() {
  return Array.from(arguments).reduce((acc, num) => acc + num,0 );
}

console.log(sum(1, 2, 3, 4, 5));