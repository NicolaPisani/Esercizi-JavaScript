
const person1 = {
  firstName: "John",
  cognome: "Doe",
  età: 25,
};

const person2 = { ...person1}; // Creiamo una copia indipendente di persona1

person2.firstName = "Simon"; // Modifichiamo la proprietà `firstName` di `person2` in "Simon" questa modifica si applica solo all'oggetto person2, mentre l'oggetto person1 rimane invariato.

console.log(person1); // OUTPUT: { firstName: "John", cognome: "Doe", età: 25 }
console.log(person2); // OUTPUT: { firstName: "Simon", cognome: "Doe", età: 25 }

