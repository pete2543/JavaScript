const people = ["Aaron ", "Mel", "John"];
const one = 1;
const b = true;
const employee = {
  firstName: "Krangkai ",
  lastName: "Suwanna",
};

function sayHello(person) {
  console.log("hello " + person.firstName);
}
console.log(typeof people);
console.log(typeof sayHello);
console.log(employee instanceof Array);
sayHello(employee);
