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

let number = 1;

while (number < 65536) {
    number *= 2;
    console.log(number);
}