import axios from 'axios';

const axiosInstance = axios.create({
    baseURL: 'https://fiesta-backend-zo5i.onrender.com/api',
    withCredentials: true,
});

export default axiosInstance;