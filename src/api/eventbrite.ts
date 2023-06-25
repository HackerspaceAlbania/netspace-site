import axios, { AxiosInstance } from 'axios';

// global axios instance
const api: AxiosInstance = axios.create({
  baseURL: process.env.GATSBY_BASE_URL,
  headers: {
    'Authorization': `Bearer ${process.env.GATSBY_PRIVATE_TOKEN}`,
    'Accept': 'application/json',
    'Content-Type': 'application/json',
  },
  // timeout: 5000,
});

export const getEvents = () => {
  return api.get(`/organizations/${process.env.GATSBY_ORG_ID}/events/`);
};

export default api;