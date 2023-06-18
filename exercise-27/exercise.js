function saveUserObjectToLocal() {
  const user = {
    id: 1,
    name: "John",
    age: 25,
  };

  const userJSON = JSON.stringify(user);
  localStorage.setItem("user", userJSON);
}

function getUserObjectFromLocal() {
  const userJSON = localStorage.getItem("user");
  if (userJSON) {
    const user = JSON.parse(userJSON);
    return user;
  }
  return null;
}

// Esempio di utilizzo delle funzioni:
saveUserObjectToLocal(); // Salva l'oggetto utente in localStorage
const retrievedUser = getUserObjectFromLocal(); // Recupera l'oggetto utente da localStorage

console.log(retrievedUser);
