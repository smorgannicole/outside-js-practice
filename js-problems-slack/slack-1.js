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
const firstChar = (stringHere) => {
    let getFirstChar = stringHere.substring(0, 1);
    return getFirstChar;
};
const oneChar = firstChar("Morgan");
console.log(oneChar);

// ## Last Character
// Write a function lastChar(str) that returns the last character of a string.
// ## Is Palindrome?
//     Write a function isPalindrome(str) that takes in a string and returns
//     true if the string is a palindrome, false otherwise. A palindrome is a word that is spelled
//     the same forwards and backwards i.e. racecar, mom, kayak.
//     To help, here is a function reverseString(str) that takes in a
//     string and returns the reversed string. You'll need to use it to solve isPalindrome.