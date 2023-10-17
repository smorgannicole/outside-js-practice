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