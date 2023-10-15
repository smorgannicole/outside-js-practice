// const username = "merrellj";

// if (username) {
// 	console.log("The user is logged in!");
// } else {
// 	console.log("The user is NOT logged in!");
// }

const nmrOfUsers = 1000;
if (nmrOfUsers >= 10000) {
	console.log("OKay, that's too many users. Please tell marketing to stop.");
} else if (nmrOfUsers >= 200) {
	console.log("That's a lot of users!");
} else {
	console.log("Marketing needs to do a better job!");
}

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