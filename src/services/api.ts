import axios from 'axios';

export const api = axios.create({
  // baseURL: 'http://localhost:8080',
  // baseURL: process.env.NEXT_LOCAL_API_URL,
  baseURL: process.env.NEXT_PUBLIC_LOCAL_API_URL,
  headers: { 'Content-Type': 'application/json' },
});
console.log(process.env.NEXT_LOCAL_API_URL);
