import {keys} from "./keys.js";

class Favorites {
    constructor(movie) {
        this.title = movie.title;
        this.year = movie.year ?? `Release Date Unavailable`;
        this.rating = movie.rating ?? `Rating Unavailable`;
        this.description = movie.description ?? `Description Unavailable`;
    }
    async postMovie() {
        const newMovie = {
            title: this.title,
            overview: this.description,
            release_date: this.year,
            vote_average: this.rating
        };
        const body = JSON.stringify(newMovie);

        const url = `http://localhost:3000/movies`;
        const options = {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: body,
        };
        const response = await fetch(url, options);
        return await response.json();
    }
}
export default Favorites;