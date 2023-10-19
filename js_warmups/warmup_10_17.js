// Function to find the largest number in an array
// const findLargestNumber = (arr) => {
//     if(!Array.isArray(arr) && arr.length === 0) {
//         return false;
//     }
//     let largest = arr[0]; //using arry in case theres a neg number
//     for(const number of arr) {
//         if(number > largest) {
//             largest = number;
//         }
//     }
//     return largest;
// };
//
// (() => {
//     const numbers = [42, 17, 8, 94, 23, 61, 12, 51, 6];
//     const result = findLargestNumber(numbers);
//     console.log(result);
// })();

const findLargestNumber = (arr) => {
    if(!Array.isArray(arr) && arr.length === 0) {
        return false;
    }
    let firstNum = arr[0]; //using arry in case theres a neg number
    for(const number of arr) {
        firstNum += number;
        }
    return firstNum;
};

// (() => {
//     const numbers = [42, 17, 8, 94, 23, 61, 12, 51, 6];
//     const result = findLargestNumber(numbers);
//     console.log(result);
// })();
