import { clientCredentials } from '../utils/client';

const endpoint = clientCredentials.databaseURL;
// GET TEAM MEMBER
const getPlayer = (uid) => new Promise((resolve, reject) => {
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
const createPlayer = (payload) => new Promise((resolve, reject) => {
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
const getSinglePlayer = (firebaseKey) => new Promise((resolve, reject) => {
  fetch(`${endpoint}/team.json?orderBy="firebaseKey"&equalTo="${firebaseKey}"`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => {
      console.warn(data);
      resolve(data);
    })
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

// DELETE SINGLE TEAM MEMBER
const deleteSingleTeamMember = (authorId) => new Promise((resolve, reject) => {
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

export {
  getTeamMember,
  createTeamMember,
  getSingleTeamMember,
  deleteTeamMember,
  updateTeamMember,
  deleteSingleTeamMember,
};
