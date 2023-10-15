/**Write a JavaScript function named calculateRectangleArea that takes two parameters, width and height, representing the dimensions of a rectangle. The function should calculate and return the area of the rectangle. */

const calculateRectangleArea = (width, height) => {
    let result;
    let areaOfRec = width * height;
    result = areaOfRec;
    return result;
}
const calcArea = calculateRectangleArea(10, 7);
console.log(calcArea);