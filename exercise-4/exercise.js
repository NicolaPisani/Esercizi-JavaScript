function isAdult({ age }) {
  return age >= 18;
// return person1.age >= 18 && person2.age >= 18;
}

const person = {
  id: 1,
  firstName: "Mario",
  lastName: "Rossi",
  age: 25,
}

console.log(isAdult(person));

// const person2 = {
//   id: 1,
//   firstName: "Mario",
//   lastName: "Rossi",
//   age: 15,
// };

// console.log(isAdult(person1,person2));
