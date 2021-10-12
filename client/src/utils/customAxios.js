import axios from 'axios';

const END_POINT = process.env.REACT_APP_API_URL;s

export const customAxios = axios.create({
  baseURL: END_POINT,
  withCredentials: true,
  credential: 'include', 
  headers: {
    'Content-Type' : 'application/json',
  },
})
