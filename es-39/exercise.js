function multiplyByTwo(value) {
  let number = 2;
}
function multiplyByTwo(number) {
  return function inner(param) {
    return param * number;
  };
}

const result = multiplyByTwo(4)(2);
console.log(result); // Output: 8