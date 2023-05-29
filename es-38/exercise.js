function printName() {
  const helloName = "Hello John";

  function inner() {
    console.log(helloName);
  }

  setTimeout(inner, 1000);
}

printName(); // Dopo 1 secondo, verrà stampato "Hello John"
