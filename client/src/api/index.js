import axios from 'axios';

// USERS
export const getUser = email => axios.get(`/api/user/${email}`);
export const createUser = payload => axios.post(`/api/user`, payload);
export const updateUser = (id, payload) => axios.put(`/api/user/${id}`, payload);

// ENTRIES
export const getEntries = () => axios.get(`/api/entries`);
export const getEntry = id => axios.get(`/api/entry/${id}`);
export const createEntry = payload => axios.post(`/api/entry`, payload);
export const updateEntry = (id, payload) => axios.put(`/api/entry/${id}`, payload);
export const deleteEntry = id => axios.delete(`/api/entry/${id}`);

// MOODS
export const getMoods = () => axios.get(`/api/moods`);
export const getMood = id => axios.get(`/api/mood/${id}`);
export const createMood = payload => axios.post(`/api/mood`, payload);
export const updateMood = (id, payload) => axios.put(`/api/mood/${id}`, payload);
export const deleteMood = id => axios.delete(`/api/mood/${id}`);

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