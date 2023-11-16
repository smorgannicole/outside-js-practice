import { debounce } from './utils.js';
const coffees = [
	{ id: 1, name: "Galactic Dawn", roast: "light" },
	{ id: 2, name: "Nebula Noir", roast: "light" },
	{ id: 3, name: "Stellar Symphony", roast: "light" },
	{ id: 4, name: "Aurora Elation", roast: "medium" },
	{ id: 5, name: "Celestial Ember", roast: "medium" },
	{ id: 6, name: "Lunar Eclipse", roast: "medium" },
	{ id: 7, name: "Supernova Spice", roast: "dark" },
	{ id: 8, name: "Cosmic Caramel Comet", roast: "dark" },
	{ id: 9, name: "Solar Flare Fusion", roast: "dark" },
	{ id: 10, name: "Interstellar Infusion", roast: "dark" },
	{ id: 11, name: "Andromeda Awakening", roast: "dark" },
	{ id: 12, name: "Cosmic Cocoa Cloud", roast: "dark" },
	{ id: 13, name: "Starlight Serenade", roast: "dark" },
	{ id: 14, name: "Cosmic Origin Odyssey", roast: "dark" },
];

const addCoffee = (coffeeName, roastType) => {
	const coffees = JSON.parse(localStorage.getItem("coffees")) || [];
	const newCoffee = {
		name: coffeeName,
		roast: roastType,
		userGenerated: true,
		id: Date.now()
	};
	coffees.push(newCoffee);
	localStorage.setItem("coffees", JSON.stringify(coffees));
	updateCoffees();
};

const renderCoffeeElement = (coffee) => {
	const coffeeElement = document.createElement("div");
	coffeeElement.classList.add(`d-flex`)
	coffeeElement.innerHTML = `
		<div class="card" style="width: 18rem;">
  			<div class="card-body">
				<h5 class="card-title">${coffee.name}</h5>
				<h6 class="card-subtitle mb-2 text-body-secondary">${coffee.roast}</h6>
				<p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
  			</div>
		</div>
		${coffee.userGenerated ? `<button class="btn btn-danger" data-delete>Delete</button>` : ``}
		${coffee.userGenerated ? `<button class="btn btn-secondary" data-edit>Edit</button>` : ``}
    `;
	const deleteButton = coffeeElement.querySelector(`button[data-delete]`);
	const editButton = coffeeElement.querySelector(`button[data-edit]`);
	if (deleteButton) {
		deleteButton.addEventListener(`click`, e => {
			coffeeElement.remove();
			removeFromLocalStorage(coffee.id);
		});
	}
	if (editButton) {
		editButton.addEventListener('click', e=>{
			renderEditForm(coffee, coffeeElement);
			editButton.classList.add(`removePointer`);
		})
	}
	document.querySelector("#coffees").prepend(coffeeElement);
};
const registerCoffees = (coffees) => {
	if (localStorage.getItem("coffees")) {
		return;
	}
	localStorage.setItem("coffees", JSON.stringify(coffees))
}
function removeFromLocalStorage(coffeeId) {
	const coffees = JSON.parse(localStorage.getItem("coffees")) || [];
	const index = coffees.findIndex(coffee => coffee.id === coffeeId);

	if (index !== -1) {
		coffees.splice(index, 1);
		localStorage.setItem("coffees", JSON.stringify(coffees));
	}
}
function renderEditForm(coffee, coffeeElement) {
	const editForm = document.createElement("form");
	editForm.innerHTML = `
            <label for="editName">Name:</label>
            <input type="text" id="editName" value="${coffee.name}" required>
            <label for="editRoast">Roast:</label>
            <input type="text" id="editRoast" value="${coffee.roast}" required>
            <button type="submit" class="btn btn-primary" data-save>Save</button>
        `;
	editForm.addEventListener("submit", e => {
		e.preventDefault();
		const oldCoffeeName = coffee.name;
		let coffees = JSON.parse(localStorage.getItem("coffees")) || [];
		coffees = coffees.filter(coffee=> coffee.name !== oldCoffeeName);

		coffee.name = editForm.querySelector("#editName").value;
		coffee.roast = editForm.querySelector("#editRoast").value;

		coffees.push({
			name: coffee.name,
			roast: coffee.roast,
			userGenerated: true
		});
		const editedName = coffeeElement.querySelector(".col:first-child p").textContent = coffee.name;
		const editedRoast = coffeeElement.querySelector(".col:nth-child(2) p").textContent = coffee.roast;
		localStorage.setItem("coffees", JSON.stringify(coffees));
		editForm.remove();
	});
	coffeeElement.after(editForm);
}
function updateLocalStorage(coffees) {
	localStorage.setItem("coffees", JSON.stringify(coffees));
}
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
