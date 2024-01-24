import { getSingleAuthorsBooks, getSingleAuthor, deleteSingleAuthor } from './authorData';
import { getSingleBook, deleteBook, getBooksByAuthor } from './bookData';

const viewPlayerDetails = (playerFirebaseKey) => new Promise((resolve, reject) => {
  getSinglePlayer(playerFirebaseKey)
    .then((playerObject) => {
      getSinglePlayer(playerObject.author_id)
        .then((playerObject) => {
          resolve({ playerObject, ...playerObject });
        });
    }).catch((error) => reject(error));
});

const viewAuthorDetails = (playerFirebaseKey) => new Promise((resolve, reject) => {
  Promise.all([getSingleAuthor(playerFirebaseKey), getSingleAuthorsBooks(playerFirebaseKey)])
    .then(([authorObject, authorBooksArray]) => {
      resolve({ ...authorObject, books: authorBooksArray });
    }).catch((error) => reject(error));
});

const deleteAuthorBooks = (authorId) => new Promise((resolve, reject) => {
  getBooksByAuthor(authorId).then((booksArray) => {
    // console.warn(booksArray, 'Author Books');
    const deleteBookPromises = booksArray.map((book) => deleteBook(book.firebaseKey));

    Promise.all(deleteBookPromises).then(() => {
      deleteSingleAuthor(authorId).then(resolve);
    });
  }).catch((error) => reject(error));
});

export { viewBookDetails, viewAuthorDetails, deleteAuthorBooks };
