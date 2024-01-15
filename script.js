/* 1. Greeting */

// function printGreeting(){
//     console.log("Hello there my friend!");
// }

// const printGreeting = () => {
//     console.log("Hello there my friend!");
// }

const printGreeting = () => console.log("Hello there my friend!");

printGreeting();



/* 2. Greeting with name */

// function greetingWithName(name){
//     console.log(`Hello there my friend! You must be ${name}!`);
// }

// const greetingWithName = (name) => {
//     console.log(`Hello there my friend! You must be ${name}!`);
// }

const greetingWithName = (name) => console.log(`Hello there my friend! You must be ${name}!`);

greetingWithName('Nisse');



/* 3. Addition */

// function addition(a, b){
//     return a + b;
// }

// const addition = (a, b) => {
//     return a + b;
// }

const addition = (a, b) => a + b;

const sum = addition(1, 2);
console.log(sum);



/* 4. Division */

// function division(a, b){
//     let quotient;

//     if (b > 0 || b < 0) {
//         quotient = a / b;
//     } else {
//         quotient = Number.NaN;
//         console.log('Division by zero is not allowed!');
//     }

//     return quotient;
// }

const division = (a, b) => {
    let quotient;

    if (b > 0 || b < 0) {
        quotient = a / b;
    } else {
        quotient = Number.NaN;
        console.log('Division by zero is not allowed!');
    }

    return quotient;
}

const quotient = division(10, 0);
console.log(quotient);


/* 5. Area */

// function area(l, h) {
//     return l * h;
// }

// const area = (l, h) => {
//     return l * h;
// }

const area = (l, h) => l * h;
console.log('Box area: ' + area(5, 4));