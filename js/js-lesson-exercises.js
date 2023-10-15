// let stringType = "this is a string";
// let boolType = true;
// let numType = 4;
// let stringNum = "7";
// let undefType = undefined;
//
// let test = typeof undefType;
// console.log(test);

// let name = "Morgan";
// let indPractice = name.indexOf(0);
//
// console.log(indPractice);

// const exceptIndAndVio = (color) => {
//     let colorChoices = ["blue", "red", "orange", "yellow", "green"];
//     let exceptColors = ["indigo", "violet"];
//     let colorLowercase = color.toLowerCase();
//     if (colorChoices == color) {
//         alert("You chose a color other than indigo and violet");
//     } else if (exceptColors == color) {
//         alert("You chose indigo or violet");
//     }
//         alert("You didn't enter a color");
// }
// const enterColor = prompt("Enter a color");
// const runItUp = exceptIndAndVio(enterColor);
// console.log(runItUp);

//while and do while practice

// let number = 1;
//
// while (number < 65536) {
//     number *= 2;
//     console.log(number);
// }

// var indexCount = 0;
//
//     while (indexCount < 10) {
//         console.log(`The current count is... ${indexCount}`);
//             indexCount++;
//     }

// var indexCount = 2;
//
// while (indexCount <= 65536) {
//     console.log(indexCount);
//         indexCount = indexCount * 2;
// }

// for (var i = 0; i < 10; i++) {
//     console.log(`This is count #` + i);
// }
// var indexCount = 0
// while (indexCount < 10) {
//     console.log(`This is count #` + i);
//         i += i;
// }

//do not use global variables inside functions, pass them as arguments instead
Ex.
const getUsername = (id) => {
    //validation
    if (!id) {
        return !false;
    }
    //build result
    let username;
    const url = dfkdmldkfmkls/${id}
    //return result
    return username;
}
const userid = 4854394;
const username = getUsername(userid);

//functions should return, not console log
//validate and return early
//function is equal to whatever the function returns
if(//condition)