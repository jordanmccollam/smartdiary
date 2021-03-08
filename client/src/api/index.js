import axios from 'axios';

const rest = process.env.REACT_APP_ENV === 'production' ? axios : axios.create({
    baseURL: 'http://localhost:8000'
})

// USERS
export const getUser = (token, email) => rest.get(`/api/user/${email}`, {headers: {Authorization: `Bearer ${token}`}}).catch(e => console.error("request", e));
export const createUser = (token, payload) => rest.post(`/api/user`, payload, {headers: {Authorization: `Bearer ${token}`}}).catch(e => console.error("request", e));
export const updateUser = (token, id, payload) => rest.put(`/api/user/${id}`, payload, {headers: {Authorization: `Bearer ${token}`}}).catch(e => console.error("request", e));

// ENTRIES
export const getEntries = (token) => rest.get(`/api/entries`, {headers: {Authorization: `Bearer ${token}`}}).catch(e => console.error("request", e));
export const getEntry = (token, id) => rest.get(`/api/entry/${id}`, {headers: {Authorization: `Bearer ${token}`}}).catch(e => console.error("request", e));
export const createEntry = (token, payload) => rest.post(`/api/entry`, payload, {headers: {Authorization: `Bearer ${token}`}}).catch(e => console.error("request", e));
export const updateEntry = (token, id, payload) => rest.put(`/api/entry/${id}`, payload, {headers: {Authorization: `Bearer ${token}`}}).catch(e => console.error("request", e));
export const deleteEntry = (token, id) => rest.delete(`/api/entry/${id}`, {headers: {Authorization: `Bearer ${token}`}}).catch(e => console.error("request", e));

// MOODS
export const getMoods = (token) => rest.get(`/api/moods`, {headers: {Authorization: `Bearer ${token}`}}).catch(e => console.error("request", e));
export const getMood = (token, id) => rest.get(`/api/mood/${id}`, {headers: {Authorization: `Bearer ${token}`}}).catch(e => console.error("request", e));
export const createMood = (token, payload) => rest.post(`/api/mood`, payload, {headers: {Authorization: `Bearer ${token}`}}).catch(e => console.error("request", e));
export const updateMood = (token, id, payload) => rest.put(`/api/mood/${id}`, payload, {headers: {Authorization: `Bearer ${token}`}}).catch(e => console.error("request", e));
export const deleteMood = (token, id) => rest.delete(`/api/mood/${id}`, {headers: {Authorization: `Bearer ${token}`}}).catch(e => console.error("request", e));

const apis = {
    createEntry,
    getEntries,
    updateEntry,
    deleteEntry,
    getEntry,
    createMood,
    getMoods,
    updateMood,
    deleteMood,
    getMood,
    getUser,
    createUser,
    updateUser
}

export default apis;