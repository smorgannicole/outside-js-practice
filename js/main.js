// from http://www.ncausa.org/About-Coffee/Coffee-Roasts-Guide
import { debounce } from './utils.js';
const coffees = [
	{ id: 1, name: "Light City", roast: "light" },
	{ id: 2, name: "Half City", roast: "light" },
	{ id: 3, name: "Cinnamon", roast: "light" },
	{ id: 4, name: "City", roast: "medium" },
	{ id: 5, name: "American", roast: "medium" },
	{ id: 6, name: "Breakfast", roast: "medium" },
	{ id: 7, name: "High", roast: "dark" },
	{ id: 8, name: "Continental", roast: "dark" },
	{ id: 9, name: "New Orleans", roast: "dark" },
	{ id: 10, name: "European", roast: "dark" },
	{ id: 11, name: "Espresso", roast: "dark" },
	{ id: 12, name: "Viennese", roast: "dark" },
	{ id: 13, name: "Italian", roast: "dark" },
	{ id: 14, name: "French", roast: "dark" },
];
// localStorage.setItem("coffees", JSON.stringify(coffees));
// const storedCoffees = localStorage.getItem("coffees");

// to remove a coffee
// localStorage.removeItem("coffees");

const addCoffee = (coffeeName, roastType) => {
	const coffees = JSON.parse(localStorage.getItem("coffees")) || [];
	const newCoffee = {
		name: coffeeName,
		roast: roastType,
		userGenerated: true
	};
	coffees.push(newCoffee);
	localStorage.setItem("coffees", JSON.stringify(coffees));
	updateCoffees();
};

const renderCoffeeElement = (coffee) => {
	const coffeeElement = document.createElement("div");
	coffeeElement.classList.add(`d-flex`)
	coffeeElement.innerHTML = `
		<div class="col">
			<p>${coffee.name}</p>
		</div>
		<div class="col">
			<p>${coffee.roast}</p>
		</div>
		${coffee.userGenerated ? `<button class="btn btn-danger" data-delete>Delete</button>` : ``}
		${coffee.userGenerated ? `<button class="btn btn-secondary" data-edit>Edit</button>` : ``}
    `;
	if (coffee.userGenerated) {
		coffeeElement.addEventListener(`click`, e => {
			coffeeElement.remove();
			localStorage.removeItem();
		})
	}
	document.querySelector("#coffees").prepend(coffeeElement);
	// const deleteBtn = coffeeElement.querySelector("button[data-delete]");
	// deleteBtn.addEventListener("click", (e) => {
	// });
	// return coffeeElement;
};

const updateCoffees = () => {
	const coffees = JSON.parse(localStorage.getItem("coffees")) || [];
	document.querySelector("#coffees").innerHTML = "";
	const roastSelectionInput = document.querySelector("#roast-selection");
	const roastSelectionValue = roastSelectionInput.value;
	const searchInput = document.querySelector("#search");
	const searchValue = searchInput.value;

	let filteredCoffees = coffees;

	if (roastSelectionValue !== "all") {
		filteredCoffees = filteredCoffees.filter((coffees) => {
			return coffees.roast.toLowerCase().includes(roastSelectionValue.toLowerCase());
		});
	}

	filteredCoffees = filteredCoffees.filter((coffee) => {
		if (!searchValue) {
			return true;
		}
		return coffee.name.toLowerCase().includes(searchValue.toLowerCase());
	});

	filteredCoffees = filteredCoffees.filter(coffee => {
		if (!searchValue) {
			return true;
		}
		return coffee.name.toLowerCase().includes(searchValue.toLowerCase());
	});


	for (let coffee of filteredCoffees) {
		renderCoffeeElement(coffee);
	}

	// const coffeesFragment = document.createDocumentFragment();
	// for (let coffee of filteredCoffees) {
	// 	coffeesFragment.appendChild(renderCoffeeElement(coffee));
	// }
	// document.querySelector("#coffees").appendChild(coffeesFragment);
};
const handleFilterEvents = (coffees) => {
	const searchInput = document.querySelector("#search");
	searchInput.addEventListener(
		"input",
		debounce((e) => {
			if (searchInput.value.toLowerCase() === "the") {
				return;
			}
			updateCoffees(coffees);
		}, 500)
	);

	const roastSelectionInput = document.querySelector("#roast-selection");
	roastSelectionInput.addEventListener("change", (e) => {
		updateCoffees(coffees);
	});
};

const registerCoffees = (coffees) => {
	if (localStorage.getItem("coffees")) {
		return;
	}
	localStorage.setItem("coffees", JSON.stringify(coffees))
}

// MAIN
(() => {
	registerCoffees(coffees);
	updateCoffees(coffees);
	handleFilterEvents(coffees);
	const addBtn = document.querySelector("button[data-add]");
	const nameInput = document.querySelector("#add-name");
	const roastInput = document.querySelector(`#add-roast`);
	addBtn.addEventListener("click", (e) => {
		e.preventDefault();
		addCoffee(nameInput.value, roastInput.value);
		nameInput.value = "";
		roastInput.value = "";
	});
})();
