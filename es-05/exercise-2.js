// ceo => 2200
// manager => 1800
// cto => 1800
// developer => 1500
// default => 1000

function calcolaSalario(ruolo) {
  switch (ruolo) {
    case "amministratore delegato":
      return 2200;
    case "manager":
    case "cto":
      return 1800;
    case "sviluppatore":
      return 1500;
    default:
      return 1000;
  }
}

const ceoSalary = calcolaSalario("amministratore delegato");
const managerSalary = calcolaSalario("manager");
const ctoSalary = calcolaSalario("cto");
const developerSalary = calcolaSalario("sviluppatore");
const altroSalary = calcolaSalario("altro");

console.log(ceoSalary);
console.log(managerSalary);
console.log(ctoSalary);
console.log(developerSalary);
console.log(altroSalary);
