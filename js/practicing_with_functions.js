/**Write a JavaScript function named calculateRectangleArea that takes two parameters, width and height, representing the dimensions of a rectangle. The function should calculate and return the area of the rectangle. */

// const calculateRectangleArea = (width, height) => {
//     let result;
//     let areaOfRec = width * height;
//     result = areaOfRec;
//     return result;
// }
// const calcArea = calculateRectangleArea(10, 7);
// console.log(calcArea);

/** Write a JavaScript function named calculateFactorial that takes a single parameter, number, representing a positive integer. The function should calculate and return the factorial of that number.

 The factorial of a non-negative integer n, denoted as n!, is the product of all positive integers from 1 to n. For example, 5! is equal to 5 x 4 x 3 x 2 x 1, which is 120. */

// const calculateFactorial = (number) => {
//     let result = 1;
//     if(number > 0){
//         for(let i = 1; i <= number; i++) {
//             result *= i;
//         }
//     }
//     return result;
// }
// const runFactorial = calculateFactorial(5);
// console.log(runFactorial);

/** Write a JavaScript function named isEven that takes a single parameter, number, representing an integer. The function should return true if the number is even and false if it's odd. */

// const isEven = (number) => {
//     let result;
//     if(number % 2 === 0) {
//         result = true;
//     } else {
//         result = false;
//     }
//     return result;
// }
// let checkIfEven = isEven(67);
// console.log(checkIfEven);

// Breaking down a function
// function sayHello() {
//   console.log("Hello");
// }

// sayHello();

// Create a function named isCoding that logs "I love coding!" to the console

// function isCoding() {
//   console.log("I love coding!");
// }

// isCoding();

// function sayHello(usersFullName) {
//   console.log(`Hello, ${usersFullName}`);
// }

// sayHello("Jason");

// Create a function named isCoding  that takes an argument and logs "Isaac love's coding!" to the console

// function isCoding(name) {
//   console.log(`${name} love's coding!`);
// }

// isCoding("Isaac");
// isCoding("Jason");
// isCoding("Jared");

// function declaration
// function sayHello(usersFullName) {
//   console.log(`Hello, ${usersFullName}`);
// }

// Annonymous function expression
// const sayHello = function (usersFullName) {
//   console.log(`Hello, ${usersFullName}`);
// };

// Arrow function expression
// const sayHello = (usersFullName) => {
//   console.log(`Hello, ${usersFullName}`);
// };

// Redo the isCoding function to use a arrow function that logs "Isaac love's coding!" to the console.

// const isCoding = (name) => {
//   console.log(`${name} love's coding!`);
// };

// isCoding("Jason");

// Return keyword

// const sayHello = (usersFullName) => {
//   return `Hello, ${usersFullName}`;
// };

// const greeting = sayHello("Jason");
// const greeting2 = sayHello("Isaac");

// console.log(greeting);
// console.log(greeting2);

// const isCoding = (name) => {
//   return `${name} love's coding!`;
// };

// const coding = isCoding("Jason");
// const coding2 = isCoding("Isaac");

// console.log(coding);
// console.log(coding2);

// const firstName = "Will";
// const greetingToUser = "Hello";

// const sayHello = (greeting, usersFullName) => {
//   return `${greeting}, ${usersFullName}`;
// };

// const greeting = sayHello(greetingToUser, firstName);

// console.log(greeting);

// Redo the isCoding function to use a arrow function that takes in 2 arguments that returns "Isaac hates coding".

// Default values
const sayHello = (usersFullName = "no username") => {
    return `Hello, ${usersFullName}`;
};

// function sayHello(name = "no username") {
//   return `Hello, ${name}`;
// }

// const greeting = sayHello("Jason");
// const greeting2 = sayHello();

// console.log(greeting2);

// console.log(greeting);

// Scoping

// const globalVar = "I am global";

// const tieFighter = (global) => {
//   const localVariable = "I am local";
//   console.log(global);
// };

// tieFighter(globalVar);

