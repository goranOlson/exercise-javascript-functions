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

// function area(l, h){
//     return l * h;
// }

// const area = (l, h) => {
//     return l * h;
// }

const area = (l, h) => l * h;
console.log('Box area: ' + area(5, 4));



/* 6. Greeting with name again */

function greetingWithNameAgain(firstName, lastName){
    return `Hello ${firstName} ${lastName}! How are you doing?`;
}

console.log(greetingWithNameAgain('Nisse', 'Hult'));



/* 7. Distance converter */
/* Det finns i USA en annan, aningen längre, mil: survey mile, cirka 1 609,347 meter */

function kilometerToMiles(k){
    const mile = 1.609347;  // US mile in kilometer
    return k / mile;
}

const kilometer = 10;
const distance = kilometerToMiles(kilometer);
console.log(`${kilometer} kilometers is about ${distance} US miles`);



/* 8. Temperature converter */

// function convertToFarenheit(celsius){
//     return celsius * 1.8 + 32;
// }

const convertToFarenheit = (celsius) => celsius * 1.8 + 32;

celsius = 10;
console.log(`${celsius} degrees Celsius is ${convertToFarenheit(celsius)} degrees Fahrenheit`);



/* 9. Mean value */

function getMeanValue(array){
    let sum = 0;

    for(let i=0; i < array.length; i++){
        sum += array[i];
    }

    return sum / array.length;
}

const arr = [1, 3];

let meanValue = getMeanValue(arr);
console.log(`Mean value: ${meanValue}`);