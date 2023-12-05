import MoviesAPI from "../movies-api/movies-api-class.js";
import Movie from "./movie.js";

const eventHandler = (movieApi) => {
    document.addEventListener(`DOMContentLoaded`, e => {
        const moviesContainer = document.querySelector(`.moviesContainer`);
        const loadingContainer = document.querySelector(`.loadingContainer`);
        loadingContainer.style.display = `block`;
        const loadingAnimation = document.getElementById(`loadingAnimation`);
        loadingAnimation.style.display = `block`;
        /** code that fetches movies */
        loadingContainer.style.display = `none`;
        loadingAnimation.style.display = `none`;
        /** code that creates movie cards/elements */
    });



    const carouselNextBtn = document.querySelector(`.carousel-control-next`);
    const activeMovie = document.querySelector(`.carousel-item.active`);
    const allCarouselMovies = document.querySelectorAll(`.carousel-item`);
    const activeMovieId = activeMovie.getAttribute(`id`);

    carouselNextBtn.addEventListener(`click`, () => {
        for (let movie of allCarouselMovies) {
            const movieId = movie.getAttribute(`id`);
            if (movieId === activeMovieId + 1) {
                activeMovie.classList.remove(`active`);
                movie.classList.add(`active`);

            }
        }
    });


    const tabLinks = document.querySelectorAll(`.tabLinks`);
    const tabContents = document.querySelectorAll(`.tabContent`);
    const goHome = document.querySelectorAll(`.goHome`);
    for (let i = 0; i < tabLinks.length; i++) {
        tabLinks[i].addEventListener(`click`, e => {
            const tabId = tabLinks[i].getAttribute(`data-tab`);
            for (let content of tabContents) {
                content.classList.remove(`active`);
            }
            const selectedTab = document.querySelector(`#${tabId}`);
            if (selectedTab) {
                selectedTab.classList.add(`active`);
                window.scrollTo({
                    top: 0,
                    behavior: `smooth`
                });
            }
        });
        for (let home of goHome) {
            home.addEventListener(`click`, e => {
                window.location.reload();
            });
        }
    }





    const addMovieBtn = document.querySelector(`.addMovieBtn`);
    const addMovieForm = document.querySelector(`.addMovieForm`)
    const titleInput = document.querySelector(`#title`);
    const ratingInput = document.querySelector(`#rating`);
    addMovieBtn.addEventListener(`click`, e => {
        addMovieForm.classList.remove(`hide`);
        titleInput.setAttribute(`required`, ``);
        ratingInput.setAttribute(`required`, ``);
    });
    const submitMovieBtn = document.querySelector(`#submitMovieBtn`);
    submitMovieBtn.addEventListener(`click`, e => {
        e.preventDefault();
        /** logic that posts movie to json */
        addMovieForm.classList.add(`hide`);
    });
    const exitFormBtn = document.querySelector(`.btn-close`);
    exitFormBtn.addEventListener(`click`, e => {
        e.preventDefault();
        addMovieForm.classList.add(`hide`);
        titleInput.removeAttribute(`required`);
        ratingInput.removeAttribute(`required`);
    });



    const updateMovieBtn = document.querySelector(`#updateMovieBtn`);
    updateMovieBtn.addEventListener(`click`, e => {
        e.preventDefault();
        const movieId = document.querySelector(`#movieId`).value;
        const editedTitle = document.querySelector(`.editTitle`).value;
        const editedRating = document.querySelector(`#editTitle`).value;
        /** fetch request using put or patch */
    });



    const searchInput = document.querySelector(`#searchInput`);
    searchInput.addEventListener(`input`, async (e) => {
        const searchedMoviesParent = document.querySelector(`.moviesSearchParent`);
        const searched = e.target.value.trim();
        searchedMoviesParent.innerHTML = ``;
        if (searched.includes(` `)) {
            const searchedNoSpace = searched.split(` `);
            const searchedCorrectFormat = searchedNoSpace.join(`+`);
            const grabArr = await movieApi.searchMovies(searchedCorrectFormat);
            if (grabArr) {
                const movies = grabArr.results;
                for (let movieData of movies) {
                    const movie = new Movie(movieData, searchedMoviesParent, movieApi);
                    movie.renderSearch(searchedMoviesParent);
                }

            } else {
                searchedMoviesParent.innerHTML = `No results found`;
            }
        } else {
            const grabArr = await movieApi.searchMovies
            (searched);
            if (grabArr) {
                const movies = grabArr.results;
                movies.forEach((movieData, index) => {
                    const movie = new Movie(movieData, searchedMoviesParent, movieApi);
                    movie.renderSearch(searchedMoviesParent, index);
                });
            } else {
                searchedMoviesParent.innerHTML = `No results found`;
            }
        }

    });
}

const movieData = {
    genres: ['Action', 'Drama'],
    id: 12345,
    overview: 'A great movie overview',
    release_date: '2023-01-01',
    title: 'Test Movie',
    vote_average: 8.5
};

(async () => {
    const movieApi = new MoviesAPI();
    // const movie = new Movie();
    const response = await movieApi.getMovies();
    const popMovieArr = response.results;
    const targetElement = document.querySelector("#carouselExample");
    if (!Array.isArray(popMovieArr)) {
        console.error("Movies data is not in the expected format.");
        return
    }
    popMovieArr.forEach((movieData, index) => {
        const movie = new Movie(movieData, targetElement, movieApi);
        movie.renderCarousel(targetElement, index);
    });
    eventHandler(movieApi);
})();