import axios from 'axios';

const api = axios.create({
    baseURL: 'http://localhost:3000/api',
})

export const createEntry = payload => api.post(`/entry`, payload);
export const getEntries = () => api.get(`/entries`);
export const updateEntry = (id, payload) => api.put(`/entry/${id}`, payload);
export const deleteEntry = id => api.delete(`/entry/${id}`);
export const getEntry = id => api.get(`/entry/${id}`);

const apis = {
    createEntry,
    getEntries,
    updateEntry,
    deleteEntry,
    getEntry,
}

export default apis;