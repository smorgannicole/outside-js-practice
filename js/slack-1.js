// ## Celsius to Fahrenheit
// Write a function celsiusToFahrenheit(celsius) that takes a number as input,
// representing a temperature in Celsius, and returns the equivalent temperature in Fahrenheit.
// const celciusToFahrenheit = (number) => {
//     return parseFloat(number * (9 / 5) + 32).toFixed(2);
// };
// const fTemp = celciusToFahrenheit(32);
// console.log(fTemp);


// ## Finding the Average
// Write a function average(a, b, c) that takes three numbers as arguments and returns their average.
// const average = (a, b, c) => {
//     return (a + b + c)/3;
// };
// const returnAvg = average(1, 2, 3);
// console.log(returnAvg);


// ## First Character
// Write a function firstChar(str) that returns the first character of a string.
// const firstChar = (stringHere) => {
//     let getFirstChar = stringHere.substring(0, 1);
//     return getFirstChar;
// };
// const oneChar = firstChar("Tree");
// console.log(oneChar);

// ## Last Character
// Write a function lastChar(str) that returns the last character of a string.

// const lastChar = (string) => {
//     let getStringLength = string.length;
//     let startOfLastChar = getStringLength -1;
//     let endOfLastChar = getStringLength;
//     let getLastChar = string.substring(startOfLastChar, endOfLastChar);
//     return getLastChar;
// }
// const giveMeTheChar = lastChar("Adjnfjkebwrkf");
// console.log(giveMeTheChar);

// ## Is Palindrome?
//     Write a function isPalindrome(str) that takes in a string and returns
//     true if the string is a palindrome, false otherwise. A palindrome is a word that is spelled
//     the same forwards and backwards i.e. racecar, mom, kayak.
//     To help, here is a function reverseString(str) that takes in a
//     string and returns the reversed string. You'll need to use it to solve isPalindrome.

const isPalindrome = (string) => {
    const throwItInReverse = string.split("").reduce((acc, char) => char + acc, "");
    const stringLowerCase = string.toLowerCase();
    const reverseLowerCase = throwItInReverse.toLowerCase();
    if (stringLowerCase === reverseLowerCase) {
        alert("This is a Palindrome");
    } else {
        alert("This is not a Palindrome");
    }
}
const enterWord = prompt("Enter any word to see if it is a Palindrome");
let willItBePalindrome = isPalindrome(enterWord);
console.log(willItBePalindrome);


