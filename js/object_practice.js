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
