import axios from 'axios';

const api = axios.create({
    baseURL: 'http://localhost:3000/api',
})

// ENTRIES
export const createEntry = payload => api.post(`/entry`, payload);
export const getEntries = () => api.get(`/entries`);
export const updateEntry = (id, payload) => api.put(`/entry/${id}`, payload);
export const deleteEntry = id => api.delete(`/entry/${id}`);
export const getEntry = id => api.get(`/entry/${id}`);

// USERS
export const getUser = email => api.get(`/user/${email}`);
export const createUser = payload => api.post(`/user`, payload);

const apis = {
    createEntry,
    getEntries,
    updateEntry,
    deleteEntry,
    getEntry,
    getUser,
    createUser
}

export default apis;