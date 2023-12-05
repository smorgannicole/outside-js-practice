import MoviesAPI from "../movies-api/movies-api-class.js";
import moviesApiClass from "../movies-api/movies-api-class.js";
import Favorites from "./favorites.js";
import favorites from "./favorites.js";

class Movie {
    constructor(movie, target, moviesAPI) {
        this.moviesAPI = moviesAPI;
        this.title = movie.title;
        this.year = movie.release_date ?? `Release Date Unavailable`;
        this.rating = movie.vote_average ?? `Rating Unavailable`;
        this.description = movie.overview ?? `Description Unavailable`;
        // this.genre = movie.genre_ids;
        // this.element = this.render(target);
    }
    renderCarousel(target, index) {
        const card = document.createElement(`div`);
        card.classList.add(`carousel-item`);
        card.setAttribute(`id`, `${index}`);
        if (card.getAttribute(`id`) === `0`) {
            card.classList.add(`active`);
        }
        card.innerHTML = `
            <p>${this.title}</p>
            <p>${this.year}</p>
            <p>${parseInt(this.rating)}/10</p>
            <p>${this.description}</p>
            <button class="editBtn">Edit</button>
            <button class="deleteBtn" data-id="${index}">Delete</button>
        `;

        // const editBtn = document.querySelector(`#editBtn`);
        // const editForm = document.querySelector(`#editForm`);
        // editBtn.addEventListener(`click`, e => {
        //     editForm.classList.toggle(`hide`);
        // });
        // const deleteBtn = document.querySelector(`.deleteBtn`);
        // deleteBtn.addEventListener(`click`, async (e) => {
        //     const buttonId = parseInt(e.target.getAttribute(`data-id`));
        //
        //     /** delete button is disabled while request is pending */
        //     deleteBtn.disabled = true;
        //     await this.moviesAPI.deleteMovie(buttonId, deleteBtn);
        // });

        target.appendChild(card);
        return card;
    }
    renderSearch (target, index) {
        const card = document.createElement(`div`);
        card.classList.add(`col`);
        card.setAttribute(`id`, `${index}`);
        card.innerHTML = `
            <p>${this.title}</p>
            <p>${this.year}</p>
            <p>${parseInt(this.rating)}/10</p>
            <p>${this.description}</p>
            <button data-add="${index}">Add</button>
        `;
        const addButtons = card.querySelectorAll(`button[data-add="${index}"]`);
        addButtons.forEach(btn => {
            btn.addEventListener(`click`, async () => {
                const cardInfo = {
                    title: this.title,
                    year: this.year,
                    rating: parseInt(this.rating),
                    description: this.description
                };
                console.log(cardInfo)
                const favoritesInstance = new Favorites(cardInfo);
                try {
                    const response = await favoritesInstance.postMovie();
                    console.log(`Movie added:`, response);
                } catch (error) {
                    console.error(`Error adding movie:`, error);
                }
            });
        });
        target.appendChild(card);
        return card;
    }
}

export default Movie;