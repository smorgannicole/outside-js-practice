import { debounce } from './utils.js';
import { formatMoney } from './utils.js';

const coffees = [
	{ id: 1, name: "Galactic Dawn", roast: "light", description: "An ethereal blend of celestial beans from the highest peaks of Colombia and Ethiopia, offering a cosmic awakening with radiant notes of sunrise citrus and starlit florals.", country: "Colombia and Ethiopia", price: formatMoney(30)},
	{ id: 2, name: "Nebula Noir", roast: "light", description: "A Dark and enigmatic, this blend swirls together the depths of Indonesian and Guatemalan beans, unveiling a cosmic abyss of rich cocoa, interstellar spices, and a lingering cosmic whisper.", country: "Indonesia and Guatemala", price: formatMoney(30) },
	{ id: 3, name: "Stellar Symphony", roast: "light", description: "Crafted from the harmonious collision of beans from Costa Rica and Kenya, this cosmic blend harmonizes bright, fruity supernovas with a hint of planetary spice.", country: "Costa Rica and Kenya", price: formatMoney(30) },
	{ id: 4, name: "Aurora Elation", roast: "medium", description: "Inspired by the dancing lights of the Arctic, this blend melds beans from Iceland and Brazil, resulting in a cosmic cup swirling with caramelized aurora hues and Icelandic purity.", country: "Iceland and Brazil", price: formatMoney(30) },
	{ id: 5, name: "Celestial Ember", roast: "medium", description: "Embrace the warmth of this cosmic blend, merging beans from Sumatra and Mexico, evoking cosmic embers with dark chocolate richness and smoky constellations.", country: "Sumatra and Mexico", price: formatMoney(30) },
	{ id: 6, name: "Lunar Eclipse", roast: "medium", description: "A celestial event in a cup, combining the mystique of Ethiopian and Hawaiian beans, revealing a lunar-inspired harmony of floral moonbeams and tropical whispers.", country: "Ethiopia and Hawaii", price: formatMoney(30) },
	{ id: 7, name: "Supernova Spice", roast: "dark", description: "Bursting with cosmic energy, this blend combines Indian and Jamaican beans, igniting the palate with interstellar spices and a fiery caffeine rush.", country: "India and Jamaica", price: formatMoney(30) },
	{ id: 8, name: "Cosmic Caramel Comet", roast: "dark", description: "A cosmic collision of Brazilian and Colombian beans, leaving a trail of caramel comet dust across the taste buds with a sweet, lingering cosmic embrace.", country: "Brazil and Colombia", price: formatMoney(30) },
	{ id: 9, name: "Solar Flare Fusion", roast: "dark", description: "Inspired by solar phenomena, this fusion of beans from Guatemala and Peru radiates with bright acidity, citrusy flares, and a solar-powered zest.", country: "Guatemala and Peru", price: formatMoney(30) },
	{ id: 10, name: "Interstellar Infusion", roast: "dark", description: "A journey through the cosmos with beans from Kenya and Mexico, blending cosmic flavors of tropical fruits and high-altitude sweetness.", country: "Kenya and Mexico", price: formatMoney(30) },
	{ id: 11, name: "Andromeda Awakening", roast: "dark", description: "Named after the distant galaxy, this blend unites Ethiopian and Tanzanian beans, offering a cosmic revelation of vibrant florals and cosmic energy.", country: "Ethiopia and Tanzania", price: formatMoney(30) },
	{ id: 12, name: "Cosmic Cocoa Cloud", roast: "dark", description: "From the depths of Brazil and Vietnam, a cosmic cloud of chocolatey richness and smoky whispers, evoking the essence of a celestial voyage.", country: "Brazil and Vietnam", price: formatMoney(30) },
	{ id: 13, name: "Starlight Serenade", roast: "dark", description: "Inspired by cosmic melodies, this fusion of Nicaraguan and Thai beans swirls with celestial notes of nutty stars and a harmonious cosmic symphony.", country: "Nicaragua and Thailand", price: formatMoney(30) },
	{ id: 14, name: "Cosmic Origin Odyssey", roast: "dark", description: "Embark on a journey through cosmic origins with rotating single-origin beans, unveiling the cosmic stories and flavors of celestial realms.", country: "Brazil and Kenya", price: formatMoney(30) },
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
		<div class="card flipped" style="width: 18rem;">
  			<div class="card-body card-inner">
  				<div class="card-front d-flex flex-column align-items-start p-4">
  					<p>${coffee.description}</p>
  					<p style="font-weight: bold">${coffee.price}</p>
				</div>
  				<div class="card-back d-flex flex-column align-items-start p-4">
					<h5 class="card-title">${coffee.name}</h5>
					<h6 class="card-subtitle mb-2 text-body-secondary">${coffee.roast}</h6>
					<p style="font-weight: lighter">${coffee.country}</p>
				</div>
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
const flipDaCard = (daCards) => {
	for (let daCard of daCards) {
		daCard.addEventListener(`click`, e => {
			daCard.classList.toggle(`flipped`);
		})
	}
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
	const card = document.querySelectorAll(`.flipped`);
	flipDaCard(card);
})();
