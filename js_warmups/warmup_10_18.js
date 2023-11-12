//
// // Function to calculate the average grade of the students
// const calculateAverageGrade = (studentList) => {
//     let sum = 0;
//     let classAverage;
//     for(let student of studentList) {
//         sum += student.grade;
//         classAverage = (sum / student.length);
//     }
//     return classAverage;
// };
//
// // Function to find the student with the highest grade
// const findTopStudent = (studentList) => {
//     let topStudent = studentList[0];
//     for(let student of studentList) {
//         if(student.grade > topStudent.grade) {
//             topStudent = student;
//         }
//     }
//     return topStudent;
// }
//
// //IIFE / Main
// (() => {
//     // Array of student objects
//     const students = [
//         { id: 1, name: "Alice", grade: 90 },
//         { id: 2, name: "Bob", grade: 85 },
//         { id: 3, name: "Charlie", grade: 78 },
//         { id: 4, name: "David", grade: 92 },
//         { id: 5, name: "Eva", grade: 88 },
//     ];
//     // Display the average grade and the top student
//     const averageGrade = calculateAverageGrade(students);
//     const topStudent = findTopStudent(students);
//
//     console.log(`Average Grade: ${averageGrade}`);
//     console.log(`Top Student: ${topStudent.name} (Grade: ${topStudent.grade})`);
// })();

/** warmup 10/19*/
// const fizzBuzz = (start, end) => {
//         for(let i = start; i <= end; i++) {
//             if(start % 3 === 0 && start % 5 === 0) {
//                 console.log(`${start} is divisible by 3 and 5`);
//             } else if (start % 5 === 0) {
//                 console.log(`${start} is divisible by 5`);
//             } else if (start % 3 === 0) {
//                 console.log(`${start} is divisible by 3`);
//             } else {
//                 console.log(`${start} is not divisible by 3 or 5`);
//             }
//             start++;
//         }
// }
// fizzBuzz(1, 100);

/**warmup 10/24*/

// const findLongestWord = (sentence) => {
//     const sentenceArray = sentence.split(" ");
//     let getThatWord = "";
//     for(let word of sentenceArray) {
//         if (word.length > getThatWord.length) {
//             getThatWord = word;
//         }
//     }
//     return getThatWord;
// }
// const getLongWord = findLongestWord("The quick brown fox jumped over the lazy dog");
// console.log(getLongWord);

// const findSecondLargest = (numbers) => {
//     let highestNum = 0;
//     let secondLargest = 0;
//     for(let number of numbers) {
//         if(number > highestNum) {
//             secondLargest = highestNum;
//             highestNum = number;
//         } else if(number > secondLargest && number !== highestNum) {
//             secondLargest = number;
//         }
//     }
//     return secondLargest;
// }
// let runIt = findSecondLargest ([1, 5, 14, 25, 3, 2]);
// console.log(runIt);

/**warmup 10/25*/
// function shuffleAndPairNames(names) {
//     // Shuffle the array using the Fisher-Yates algorithm
//     for (let i = names.length - 1; i > 0; i--) {
//         const j = Math.floor(Math.random() * (i + 1));
//         [names[i], names[j]] = [names[j], names[i]];
//     }
//
//     // Initialize an array to hold the pairs
//     const pairs = [];
//
//     // Pair the names into groups of 2
//     for (let i = 0; i < names.length; i += 2) {
//         if (i + 1 < names.length) {
//             pairs.push([names[i], names[i + 1]]);
//         } else {
//             // If there's only one name left, add it to the last group
//             pairs[pairs.length - 1].push(names[i]);
//         }
//     }
//     return pairs;
// }
//
// // Example usage:
// const names = ["Alice", "Bob", "Charlie", "David", "Eve", "Frank", "Grace", "Helen", "Ivy", "Jack", "Kate", "Liam", "Mia", "Nora", "Oliver", "Penny", "Quinn", "Ryan", "Sophia"];
//
// const shuffledPairs = shuffleAndPairNames(names);
// console.log(shuffledPairs);

/** Write a JavaScript function called shuffleAndGroupNumbers that takes an array of 15 numbers as a parameter. This function should shuffle the numbers, and then pair them into groups of 3 with one group of 6 if there are any remaining numbers. Finally, it should return an array of these groups.

 For example, if you call shuffleAndGroupNumbers([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]), the function should return an array like this: [[3, 1, 12], [15, 2, 5], [9, 6, 11], [10, 7, 8, 14, 4, 13]]. */

// const shuffleAndGroupNumbers = (arr) => {
//     for (let i = arr.length - 1; i > 0; i--) {
//         const j = Math.floor(Math.random() * (i + 1));
//         [arr[i], arr[j]] = [arr[j], arr[i]];
//     }
//
//     const pairsOf3 = [];
//
//     // Pair the names into groups of 2
//     for (let i = 0; i < arr.length; i += 3) {
//         if (i + 3 < arr.length) {
//             pairsOf3.push([arr[i], arr[i + 1]]);
//         } else {
//             // If there's only one name left, add it to the last group
//             pairsOf3[pairsOf3.length - 1].push(arr[i]);
//         }
//     }
//     return pairsOf3;
// }
// const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16];
// const run = shuffleAndGroupNumbers(nums);
// console.log(run);
/**warmup 10/30*/
// function digitalRoot(n) {
//     let sumOfNum = 0;
//     let splitNum = n.toString().split('');
//     for (let num of splitNum) {
//         let backToNum = parseFloat(num);
//         sumOfNum += backToNum
//     }
//     while(sumOfNum > 10) {
//         let splitNumber = sumOfNum.toString().split('');
//         for (let number of splitNumber) {
//             let backToNumber = parseFloat(number);
//             sumOfNum += backToNumber;
//         }
//     }
//         return sumOfNum;
// }
// let run = digitalRoot(22);
// console.log(run);

/**warmup 11/1 A pangram is a sentence that contains every single letter of the alphabet at least once. For example, the sentence "The quick brown fox jumps over the lazy dog" is a pangram, because it uses the letters A-Z at least once (case is irrelevant).
//
//  Given a string, detect whether or not it is a pangram. Return True if it is, False if not. Ignore numbers and punctuation.*/
//
// function isPangram(string){
//     let alphabet = `abcdefghijklmnopqrstuvwxyz`;
//     alphabet = alphabet.split("");
//     let lowerString = string.toLowerCase();
//     let toArray = lowerString.split( "");  //has to be separated by empty string or it will be comparing "a" to "The"
//     for(let letter of alphabet) {
//         if (toArray.includes(letter)) {
//             return true;
//         }
//     } return false;
// }
// const run = isPangram("The quick brown fox jumps over the lazy dog");
// console.log(run);
/** vowel practice problem*/
// function getCount(str) {
//     if(typeof str !== "string"){
//         return false;
//     }
//     let vowels ="aeiou" ;
//     let i = 0;
//     for(let letter of str) {
//         if(vowels.includes(letter)) {
//             i += 1;
//         }
//     }   return i;
// }
// let run = getCount(`abracadabra`);
// console.log(run);

/** Return the number (count) of vowels in the given string. We will consider a, e, i, o, u as vowels for this Kata (but not y). The input string will only consist of lower case letters and/or spaces.*/
// function getCount(str) {
//     if (typeof str !== "string") {
//         return false;
//     }
//     const vowels = "aeiou"
//     const strArr = str.split(``);
//     let i = 0;
//     for (let str of strArr) {
//         if (vowels.includes(str)) {
//             i++;
//         }
//     } return i;
// }
// const runIt = getCount(`alphabet`);
// console.log(runIt)

/** If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.
 Finish the solution so that it returns the sum of all the multiples of 3 or 5 below the number passed in.
 Additionally, if the number is negative, return 0.
 Note: If the number is a multiple of both 3 and 5, only count it once.*/
function solution(number){
    if (number < 0) {
        return 0;
    }
    if (typeof number !== "number") {
        return 0;
    }
    let sum3 = 0;
    let sum5 = 0;
    let sum = 0;
    for (let i = 1; i < number; i++) {
        if (i % 3 === 0) {
            sum3 += i;
        }
    }
    for (let i = 1; i < number; i++) {
        if (i % 5 === 0) {
            sum5 += 5;
        }
    }
    sum = sum3 + sum5;
    return sum;
}
const runIt = solution(13);
console.log(runIt)
