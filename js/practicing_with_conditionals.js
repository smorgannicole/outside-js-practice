// const username = "merrellj";

// if (username) {
// 	console.log("The user is logged in!");
// } else {
// 	console.log("The user is NOT logged in!");
// }

// const nmrOfUsers = 1000;
// if (nmrOfUsers >= 10000) {
// 	console.log("OKay, that's too many users. Please tell marketing to stop.");
// } else if (nmrOfUsers >= 200) {
// 	console.log("That's a lot of users!");
// } else {
// 	console.log("Marketing needs to do a better job!");
// }

// const userRole = "admin";

// if (userRole === "student") {
// 	console.log("Let them see the curriculum");
// } else if (userRole === "admin") {
// 	console.log("Let them see the curriculum and the instructor portal");
// } else {
// 	console.log("Don't let them see anything");
// }

// const isTwo = (number) => {
// 	if (typeof number !== "number") {
// 		return false;
// 	}

// 	let result = number === 2;
// 	return result;
// };

// const calculateTip = (tipPercentage, billTotal) => {
// 	const isTheTipBogus = isNaN(parseFloat(tipPercentage));
// 	const isTheTotalBogus = isNaN(parseFloat(billTotal));
// 	if (isTheTipBogus || isTheTotalBogus) {
// 		return "not able to be calculated.";
// 	} else if (parseFloat(tipPercentage) < 0) {
// 		return "not able to be calculated.";
// 	}
// 	let tipDecimal = parseFloat(tipPercentage) / 100;
// 	let result = parseFloat(billTotal) * parseFloat(tipDecimal);
// 	return result.toLocaleString("en-US", { style: "currency", currency: "USD" });
// };

// const myTotal = prompt("What was your bill total?");
// const myTipPercentage = prompt("What PERCENTAGE would you like to tip?");

// const myTip = calculateTip(myTipPercentage, myTotal);

// console.log(`The tip is ${myTip}`);

// TERNARY OPERATOR

// const isLoggedIn = false;

// let message;
// if (isLoggedIn) {
// 	message = "Welcome back!";
// } else {
// 	message = "Please Log In!";
// }

// let message = isLoggedIn ? "Welcome back!" : "Please Log In!";
// console.log(message);

// let pizzaPreference = prompt("What kind of pizza do you like?");

// switch (pizzaPreference.toLowerCase()) {
// 	case "cheese":
// 	// break;
// 	case "hawaiian":
// 		console.log("I love cheese pizza too... but its boring.");
// 		// console.log("I dig it. Sweet and salty together");
// 		break;
// 	case "supreme":
// 		console.log("Me too! Why choose when you can put everything on a pizza!");
// 		break;
// 	case "pepperoni":
// 		console.log("Yes! Always a classic. It's only pizza my children will eat.");
// 		break;
// 	default:
// 		console.log("What a weirdo....");
// 		break;
// }

// console.log("testing");

/** Write a JavaScript function named checkNumber that takes a single parameter, number, representing a numeric value. The function should determine whether the number is positive, negative, or zero and return an appropriate message. */

// const checkNumber = (number) => {
//     let result;
//     if(number > 0) {
//         result = "positive";
//     } else if(number < 0) {
//         result = "negative";
//     } else {
//         result = "zero";
//     }
//     return result;
// }
// const whatIsNum = checkNumber(-9);
// console.log(whatIsNum);

/** Write a JavaScript function named titleCase that takes a string as a parameter and converts it to title case. Title case means that the first letter of each word in the string should be capitalized, while all other letters should be in lowercase. */
// function titleCase(inputString) {
//     const words = inputString.split(' ');
// const titleCasedWords = [];
// for (const word of words) {
//     const titleCasedWord = word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
//     titleCasedWords.push(titleCasedWord);
// }
//
// const titleCasedString = titleCasedWords.join(' ');
//
// return titleCasedString;
// }
//
// const sentence = "this is a sample sentence";
// const title = titleCase(sentence);
// console.log(title);
/** Write a JavaScript function named countVowels that takes a string as a parameter and counts the number of vowels (a, e, i, o, u) in the string. The function should return the count of vowels in the string. */
// function countVowels(inputString) {
//     const lowercaseString = inputString.toLowerCase();
//     let vowelCount = 0;
//
//     for (const char of lowercaseString) {
//         if (char === 'a' || char === 'e' || char === 'i' || char === 'o' || char === 'u') {
//             vowelCount++;
//         }
//     }
//     return vowelCount;
// }
// const text = "Hello, World!";
// const vowelCount = countVowels(text);
// console.log(`The number of vowels in the text is: ${vowelCount}`);

/**Write a JavaScript function named isPalindrome that takes a string as a parameter and checks if the string is a palindrome.*/
const isPalindrome = (string) => {
    const stringToLower = string.toLowerCase();
    const stringToLowerReversed = reverseString(stringToLower);
    if(stringToLower === stringToLowerReversed) {
        return "we have a palindrome";
    } else {
        return "this is not a palindrome"
    }
}
const runPalindrome = isPalindrome("racecar");
console.log(runPalindrome);



