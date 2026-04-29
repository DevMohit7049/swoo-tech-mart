import axios from 'axios';
import env from "dotenv";

const API = axios.create({
  baseURL: import.meta.env.VITE_BASE_URL,
  withCredentials:true,
  headers: {
    'Content-Type': 'application/json'
  }
});

export default API;
