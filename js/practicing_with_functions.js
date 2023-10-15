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

const calculateFactorial = (number) => {
    let result = 1;
    if(number > 0){
        for(let i = 1; i <= number; i++) {
            result *= i;
        }
    }
    return result;
}
const runFactorial = calculateFactorial(5);
console.log(runFactorial);