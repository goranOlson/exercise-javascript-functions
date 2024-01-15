/* 1. Greeting */

// function printGreeting() {
//     console.log("Hello there my friend!");
// }

// const printGreeting = () => {
//     console.log("Hello there my friend!");
// }

const printGreeting = () => console.log("Hello there my friend!");

printGreeting();


/* 2. Greeting with name */

// function greetingWithName(name) {
//     console.log(`Hello there my friend! You must be ${name}!`);
// }

// const greetingWithName = (name) => {
//     console.log(`Hello there my friend! You must be ${name}!`);
// }

const greetingWithName = (name) => console.log(`Hello there my friend! You must be ${name}!`);

greetingWithName('Nisse');


/* 3. Addition */

// function addition(a, b) {
//     return a + b;
// }

// const addition = (a, b) => {
//     return a + b;
// }

const addition = (a, b) => a + b;

const sum = addition(1, 2);
console.log(sum);