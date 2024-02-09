// Create a function that takes a string and returns the number of vowels in the string.

// const string3 = "banana"
// // Expected result: 3
// const string4 = "I like ice cream"
// // Expected result: 6
//
// const vowelCounter = (str) => {
//     const vowels = `aeiouAEIOU`
//     let counter = 0
//     let strArr = str.split("")
//     strArr.forEach(letter => {
//         if (vowels.includes(letter)) {
//             counter++
//         }
//     })
//     return counter
// }
// console.log(vowelCounter(string3))

////////////////////////////////////////////////////////
// Create a function that takes in an array and returns an array of the accumulating sum. An empty array should return an empty array.

const accountTransactions1 = [100, -17, -23, -9]
// Expected output: [100, 83, 60, 51]
const accountTransactions2 = [250, -89, 100, -96]
// Expected output: [250, 161, 261, 165]
const accountTransactions3 = []
// Expected output: []
let accumulator = (numArr) => {
    let acc = 0
    return numArr.map(num => acc += num)
}
console.log(accumulator(accountTransactions1))