import axios from 'axios';

const api = axios.create({
    baseURL: 'https://smart-diary.herokuapp.com/api',
})

// ENTRIES
export const createEntry = payload => api.post(`/entry`, payload);
export const getEntries = () => api.get(`/entries`);
export const updateEntry = (id, payload) => api.put(`/entry/${id}`, payload);
export const deleteEntry = id => api.delete(`/entry/${id}`);
export const getEntry = id => api.get(`/entry/${id}`);

// MOODS
export const createMood = payload => api.post(`/mood`, payload);
export const getMoods = () => api.get(`/mood`);
export const updateMood = (id, payload) => api.put(`/mood/${id}`, payload);
export const deleteMood = id => api.delete(`/mood/${id}`);
export const getMood = id => api.get(`/mood/${id}`);

// USERS
export const getUser = email => api.get(`/user/${email}`);
export const createUser = payload => api.post(`/user`, payload);
export const updateUser = (id, payload) => api.put(`/user/${id}`, payload);

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