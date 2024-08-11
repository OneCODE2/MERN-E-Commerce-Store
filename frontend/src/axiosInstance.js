import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: "https://mern-e-commerce-store-three.vercel.app", 
  timeout: 5000, 
  headers: {
    'Content-Type': 'application/json',
  }
});

export default axiosInstance;
