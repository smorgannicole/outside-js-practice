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
const fizzBuzz = (start, end) => {
        for(let i = start; i <= end; i++) {
            if(start % 3 === 0 && start % 5 === 0) {
                console.log(`${start} is divisible by 3 and 5`);
            } else if (start % 5 === 0) {
                console.log(`${start} is divisible by 5`);
            } else if (start % 3 === 0) {
                console.log(`${start} is divisible by 3`);
            } else {
                console.log(`${start} is not divisible by 3 or 5`);
            }
            start++;
        }
}
fizzBuzz(1, 100);