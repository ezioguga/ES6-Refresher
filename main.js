// CONST & LET
let myname = "json";
let testmsg;

// using const person object cannot be re-created but we can manipulate the data inside it.
const person = {
  myname: "mike",
  age: 24,
};

person.myname = "rose";
console.log(person);

// using const arr array cannot be re-created but we can manipulate the data inside it.
const nums = [1, 2, 3];
nums.push(4);
console.log(nums);

// Normal function
function sayHello() {
  console.log("Hello World from normal function");
}

sayHello();

// ARROW FUNCTIONS
// const sayHello1 = () => {
//   console.log("Hello World from arrow function");
// };

// sayHello1();

// if it's one line we don't need curly braces.
// const sayHello1 = () => console.log("Hello World from arrow function");
// sayHello1();

// single parameter
// const sayHello1 = name =>
//   console.log("Hello World from arrow function by " + name);
// sayHello1("guga");

// Multi paramter
// const sayHello1 = (name, age) =>
//   console.log("Hello World from arrow function by " + name + " and his age is "+age);
// sayHello1("guga",24);

// Template Literals
const sayHello1 = (name, age) =>
  console.log(`my name is ${name} and my age is ${age}`);
sayHello1("guga", 24);

const fruits = ["Apples", "Oranges", "Grapes"];
const test = fruits.slice(0, 2);
console.log("Testing slices: " + test);

// FOREACH
fruits.forEach((fruit, index) =>
  console.log(`${fruit} and it's index is ${index}`)
);

// MAP
const singleFruit = fruits.map((fruit) => fruit.slice(0, -1).toUpperCase());
console.log(singleFruit);

// FILTER
const people = [
  { id: 1, name: "jackson" },
  { id: 2, name: "mark" },
  { id: 3, name: "michel" },
];

// returning an array that removes mark
const people2 = people.filter((person) => person.id !== 2);
console.log(people2);

// SPREAD

const arr = [1, 2, 3];
const arr2 = [...arr, 4, 5, 6];
console.log(arr2);

// To filter out number 2 from arr
const arr3 = [...arr.filter((num) => num !== 2)];
console.log(arr3);

const person1 = {
  name: "milky",
  age: 27,
};

const newperson1 = {
  ...person1,
  email: "milky@gmail.com",
};

console.log(newperson1);

// DESTRUCTURING

const profile = {
  name: "Brew",
  address: {
    street: "Hamers Ave",
    city: "Colombo",
  },
  hobbies: ["animes", "k-drama"],
};

const { name, address, hobbies } = profile;
console.log(name, address.street, hobbies[0]);

const { street, city } = profile.address;
console.log(street, city);

// CLASSES
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  greet() {
    return `Hello, my name is ${this.name} and I am ${this.age}`;
  }
}

const Person1 = new Person("kresti", 23);
const Person2 = new Person("james", 34);

console.log(Person1.greet());
console.log(Person2.greet());

// SUBCLASSES
class Customer extends Person {
  constructor(name, age, balance) {
    super(name, age);
    this.balance = balance;
  }
  info() {
    return `${this.name} owes $${this.balance}.00`;
  }
}

const customer1 = new Customer("philips", 25, 400);
console.log(customer1.info());