import {keys} from "../js/keys.js";

class MoviesAPI {
    constructor() {
        this.base= `https://api.themoviedb.org/3/`;
        this.bearer = `eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzZGU4MDRiNThkYzdlYWQyOGQwYzliMzNlZGMxZDkwOCIsInN1YiI6IjY1NjYxNDI0YTM0OTExMDEzOGU2MjA1MiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.2sAxDb1HYss_5Y4QFm9TCF2-SQpXWysWwOB12bEMGZs`;
        this.apiKey = keys.movies;
        this.genreId = this.getGenreId();
        this.movies = this.getMovies();
        this.imageBase = `http://image.tmdb.org/t/p/`;
    }
    async getMovies() {
        const url = `${this.base}discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc&api_key=${this.apiKey}`;
        const options = {
            method: `GET`,
            headers: {
                accept: `application/json`,
                Authorization: `Bearer ${this.bearer}`
            }
        };
        const response = await fetch(url, options);
        return await response.json();
    }
    async getMovie(){
        const url = `${this.base}movie/${this.movieid}?api_key=${this.apiKey}`;
        const options = {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            },
        };
        const response = await fetch(url, options);
        return await response.json();
    }
    async deleteMovie(buttonId, deleteBtn) {
        /** logic that deletes movie from json by id */
        const url = `${this.base}movie/${this.movieid}?api_key=${this.apiKey}`;
        const options = {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json",
            },
        };
        const response = await fetch(url, options);
        deleteBtn.disabled = false;
        return await response.json();
    }
    // async postMovie({ genres, overview, release_date, title, vote_average }) {
    //     const newMovie = {
    //         genres,
    //         overview,
    //         release_date,
    //         title,
    //         vote_average
    //     };
    //     const body = JSON.stringify(newMovie);
    //
    //     const url = `http://localhost:3000/movies`;
    //     const options = {
    //         method: "POST",
    //         headers: {
    //             "Content-Type": "application/json",
    //         },
    //         body: body,
    //     };
    //     const response = await fetch(url, options);
    //     return await response.json();
    // }
    async patchMovie(movie) {
        const newMovie = {
            ...movie,
        };
        const body = JSON.stringify(newMovie);
        const url = `http://localhost:3000/movies/${id}`;
        const options = {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json",
            },
            body: body,
        };
        const response = await fetch(url, options);
        return await response.json();
    }
    async getNowPlaying() {
        const url = `${this.base}movie/now_playing?language=en-US&page=1`;
        const options = {
            method: `GET`,
            headers: {
                accept: `application/json`,
                Authorization: `Bearer ${this.bearer}`,
            }
        };
        const response = await fetch(url, options);
        return await response.json();
    }
    async getGenreId() {
        const url = `${this.base}genre/movie/list?language=en`;
        const options = {
            method: `GET`,
            headers: {
                accept: `application/json`,
                Authorization: `Bearer ${this.bearer}`,
            }
        };
        const response = await fetch(url, options);
        return await response.json();
    }
    async addGenreNamesToMovies() {
        const movies = await this.getMovies();
        const genreIds = await this.getGenreId();
        for (let movie of movies) {
            if (Array.isArray(movie.genre_ids)) {
                movie.genreIds = movie.genre_ids.map(id => {
                    const foundGenre = genreIds.find(genre => genre.id === id);
                    return foundGenre ? foundGenre.name : "Unknown";
                });
            } else {
                movie.genreIds = ["Unknown"];
            }
        } return movies;
    }
    async searchMovies(query) {
        const url = `${this.base}search/movie?query=${query}&api_key=${this.apiKey}`;
        const options = {
            method: `GET`,
            headers: {
                accept: `application/json`,
                Authorization: `Bearer ${this.bearer}`
            }
        };
        const response = await fetch(url, options);
        return await response.json();
    }
}
export default MoviesAPI;