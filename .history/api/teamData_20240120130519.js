import { clientCredentials } from '../utils/client';

const endpoint = clientCredentials.databaseURL;
//GET TEAM MEMBER
const getTeamMember = (uid) => new Promise((resolve, reject) => {
  fetch(`${endpoint}/team.json?uid="${uid}"`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => {
      if (data) {
        resolve(Object.values(data));
      } else {
        resolve([]);
      }
    })
    .catch(reject);
});

// FIXME: CREATE TEAM MEMBER
const createTeamMember = (payload) => new Promise((resolve, reject) => {
  fetch(`${endpoint}/team.json`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(payload),
  })
    .then((response) => response.json())
    .then((data) => resolve(data))
    .catch(reject);
});

// FIXME: GET SINGLE TEAM MEMBER
const getSingleTeamMember = (firebaseKey) => new Promise((resolve, reject) => {
  fetch(`${endpoint}/team/${firebaseKey}.json`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => resolve(data))
    .catch(reject);
});

// FIXME: DELETE TEAM MEMBER
const deleteTeamMember = (firebaseKey) => new Promise((resolve, reject) => {
  fetch(`${endpoint}/team/${firebaseKey}.json`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => resolve(data))
    .catch(reject);
});

// FIXME: UPDATE TEAM MEMBER
const updateTeamMember = (payload) => new Promise((resolve, reject) => {
  fetch(`${endpoint}/team/${payload.firebaseKey}.json`, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(payload),
  })
    .then((response) => response.json())
    .then(resolve)
    .catch(reject);
});

// TODO: GET A SINGLE TEAM MEMBERS
const getSingleAuthorsBooks = (authorKey) => new Promise((resolve, reject) => {
  fetch(`${endpoint}/books.json?orderBy="authorKey"&equalTo="${authorKey}"`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => {
      const books = Object.keys(data).map((key) => ({
        firebaseKey: key,
        ...data[key],
      }));
      resolve(books);
    })
    .catch(reject);
});
const deleteSingleAuthor = (authorId) => new Promise((resolve, reject) => {
  fetch(`${endpoint}/authors/${authorId}.json`, {
    method: 'DELETE',
  })
    .then((response) => {
      if (response.ok) {
        resolve();
      } else {
        reject(new Error('Error deleting author'));
      }
    })
    .catch(reject);
});

const favoriteAuthors = (uid) => new Promise((resolve, reject) => {
  fetch(`${endpoint}/authors.json?orderBy="uid"&equalTo="${uid}"`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => {
      const favorites = Object.values(data).filter((item) => item.favorite);
      resolve(favorites);
    })
    .catch(reject);
});

export {
  getAuthors,
  createAuthor,
  getSingleAuthor,
  deleteAuthor,
  updateAuthor,
  favoriteAuthors,
  getSingleAuthorsBooks,
  deleteSingleAuthor,
};
