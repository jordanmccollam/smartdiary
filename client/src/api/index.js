import axios from 'axios';

// USERS
export const getUser = email => axios.get(`/api/user/${email}`).catch(e => console.error("request", e));
export const createUser = payload => axios.post(`/api/user`, payload).catch(e => console.error("request", e));
export const updateUser = (id, payload) => axios.put(`/api/user/${id}`, payload).catch(e => console.error("request", e));

// ENTRIES
export const getEntries = () => axios.get(`/api/entries`).catch(e => console.error("request", e));
export const getEntry = id => axios.get(`/api/entry/${id}`).catch(e => console.error("request", e));
export const createEntry = payload => axios.post(`/api/entry`, payload).catch(e => console.error("request", e));
export const updateEntry = (id, payload) => axios.put(`/api/entry/${id}`, payload).catch(e => console.error("request", e));
export const deleteEntry = id => axios.delete(`/api/entry/${id}`).catch(e => console.error("request", e));

// MOODS
export const getMoods = () => axios.get(`/api/moods`).catch(e => console.error("request", e));
export const getMood = id => axios.get(`/api/mood/${id}`).catch(e => console.error("request", e));
export const createMood = payload => axios.post(`/api/mood`, payload).catch(e => console.error("request", e));
export const updateMood = (id, payload) => axios.put(`/api/mood/${id}`, payload).catch(e => console.error("request", e));
export const deleteMood = id => axios.delete(`/api/mood/${id}`).catch(e => console.error("request", e));

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