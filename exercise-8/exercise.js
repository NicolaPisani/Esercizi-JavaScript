const person = {
  id: 1,
  firstName: "Mario",
  lastName: "Rossi",
  age: 25,
};

const { id, ...personInfo } = person;  // "L'operatore Rest ...personInfo raccoglie tutte le proprietà di person tranne id";


console.log(id, personInfo);
