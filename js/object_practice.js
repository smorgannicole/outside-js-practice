/** Problem: Calculate Average Grade

 You're given an array of student objects, where each student object has the following properties:

 name (string): The name of the student.
 grades (array): An array of numerical grades (e.g., [85, 92, 78, 90]).
 Your task is to write a JavaScript function named calculateAverageGrade that takes an array of student objects and calculates the average grade for each student. The function should return an array of objects, where each object contains the student's name and their average grade. */

// // IIFE (Immediately Invoke Function Expression)
// // Main method
// (() => {
//     function calculateAverageGrade(students) {
//         const averageGrades = [];
//
//         for (const student of students) {
//             const name = student.name;
//             const grades = student.grades;
//
//             // Calculate the average grade
//             let sum = 0;
//             for (const grade of grades) {
//                 sum += grade;
//             }
//             const average = sum / grades.length;
//
//             // Create an object with the student's name and average grade
//             const studentAverage = {
//                 name: name,
//                 average: average
//             };
//
//             averageGrades.push(studentAverage);
//         }
//
//         return averageGrades;
//     }
//
// // Example data: Array of student objects
//     const students = [
//         { name: "Alice", grades: [85, 92, 78, 90] },
//         { name: "Bob", grades: [88, 76, 89, 94] },
//         { name: "Carol", grades: [76, 85, 92, 89] }
//     ];
//
// // Test the function
//     const averageGrades = calculateAverageGrade(students);
//     console.log(averageGrades);
//
//
// })();

// const targetNumber = Math.floor(Math.random() * 100) + 1;
//
// let attempts = 0;
//
// function checkGuess() {
//     let userGuess = parseInt(prompt("Guess a number between 1 and 100"));
//     while (userGuess !== targetNumber) {
//         attempts++;
//         if(userGuess === targetNumber) {
//             return `You guessed the number! Your total number of attempts was ${attempts}`;
//             let userGuess = parseInt(prompt("Guess a number between 1 and 100"));
//         } else if(userGuess < targetNumber) {
//             return `The number you guessed was less than the random number. Your total number of attempts was ${attempts}`;
//             let userGuess = parseInt(prompt("Guess a number between 1 and 100"));
//         } else if(userGuess > targetNumber) {
//             return `The number you guessed was greater than the random number. Your total number of attempts was ${attempts}`;
//             let userGuess = parseInt(prompt("Guess a number between 1 and 100"));
//         } else {
//             return `Please enter a number between 1 and 100`;
//             let userGuess = parseInt(prompt("Guess a number between 1 and 100"));
//         }
//     }
// }
// const guessThatNum = checkGuess();
// console.log(guessThatNum);

//recursion is a way to loop
// use of traditional function & const for userGuess

// Function to find the largest number in an array
const findLargestNumber = (arr) => {
    let largest = 0;
    for(const number of arr) {
        if(number > largest) {
            largest = number;
        }
    }
    return largest;
};

(() => {
    const numbers = [42, 17, 8, 94, 23, 61, 12, 51, 6];
    const result = findLargestNumber(numbers);
    console.log(result);
})();