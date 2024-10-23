import axios from "axios";

const API_URL = "https://backend-contact-management-system.onrender.com/api";
alert(API_URL)

// Basic CRUD Operations
export const getContacts = () => axios.get(`${API_URL}/`);
export const saveContact = (contact) => axios.post(`${API_URL}/save`, contact);
export const updateContact = (contact) =>
  axios.post(`${API_URL}/update`, contact);
export const deleteContact = (_id) => axios.post(`${API_URL}/delete`, { _id });
export const findDuplicates = () => axios.get(`${API_URL}/duplicates`);
export const mergeContacts = (mergedData) =>
  axios.post(`${API_URL}/merge`, mergedData);

// Import contacts from VCF
export const importContacts = (formData) =>
  axios.post(`${API_URL}/import`, formData);

export const exportContacts = () => {
  return axios({
    url: `${API_URL}/export`,
    method: "GET",
    responseType: "blob", // Important for handling file download
  });
};
