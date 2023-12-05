const getBooks = async () => {
    const url = 'url@url.com/books';
    const options = {
        method: "GET",
        headers: {
            "Content-Type": "application/json"
        },
    };
    const response = await fetch(url, options);
    const data = await response.json();
    return data;
}

const getBook = async (id) => {
    const url = `url@url.com/books/${id}`;
    const options = {
        method: "GET",
        headers: {
            "Content-Type": "application/json"
        },
    };
    const response = await fetch(url, options);
    const data = await response.json();
    return data;
}

const deleteBook = async (id) => {
    const url = `url@url.com/books/${id}`;
    const options = {
        method: "DELETE",
        headers: {
            "Content-Type": "application/json"
        },
    };
    const response = await fetch(url, options);
    const data = await response.json();
    return data;
}

const postBook = async ({ISBN, authorId, genre, publishedYear, summary, title}) => {

    const newBook = {
        ISBN,
        authorId,
        genre,
        publishedYear,
        summary,
        title
    }

    const body = JSON.stringify(newBook);

    const url = `url@url.com/books`;
    const options = {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: body
    };
    const response = await fetch(url, options);
    const data = await response.json();
    return data;
}

// Patch
const patchBook = async ({book}) => {

    const newBook = {
        ...book
    }

    const body = JSON.stringify(newBook);

    const url = `url@url.com/books/${book.id}`;
    const options = {
        method: "PATCH",
        headers: {
            "Content-Type": "application/json"
        },
        body: body
    };
    const response = await fetch(url, options);
    const data = await response.json();
    return data;
}

//Update completely replaces data with whatever you passed it. Anything you didnt send in body will be gone

const getBookAndAuthor = (id) => {
    const getAuthorss = async () => {
        const url = 'url@url.com/books';
        const options = {
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            },
        };
        const response = await fetch(url, options);
        const data = await response.json();
        return data;
    }

    const getAuthor = async (id) => {
        const url = `url@url.com/books/${id}`;
        const options = {
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            },
        };
        const response = await fetch(url, options);
        const data = await response.json();
        return data;
    }

    const deleteAuthor = async (id) => {
        const url = `url@url.com/books/${id}`;
        const options = {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json"
            },
        };
        const response = await fetch(url, options);
        const data = await response.json();
        return data;
    }

    const postAuthor = async ({name, birthYear, deathYear, nationality}) => {

        const newAuthor = {
            name,
            birthYear,
            deathYear,
            nationality
        }

        const body = JSON.stringify(newAuthor);

        const url = `url@url.com/books`;
        const options = {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: body
        };
        const response = await fetch(url, options);
        const data = await response.json();
        return data;
    }

// Patch
    const patchAuthor = async ({author}) => {

        const newAuthor = {
            ...author
        }

        const body = JSON.stringify(newAuthor);

        const url = `url@url.com/books/${author.id}`;
        const options = {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json"
            },
            body: body
        };
        const response = await fetch(url, options);
        const data = await response.json();
        return data;
    }
}


//MAIN
(async () => {
    const books = await getBooks();
    console.log(books);
    const book2 = await getBook(2);
    const newBookId = await postBook({
        ISBN: "12345",
        authorId: "1",
        genre: "Fiction",
        publishedYear: "1998",
        summary: "Summary",
        title: "Book"
    })
    console.log(newBookId)
    const editedBook = await patchBook({
        id: 5,
        title: "new book with better title"
    })
    console.log(editedBook)
})();