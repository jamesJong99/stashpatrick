import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'api', // Replace this with your API base URL
});

export default axiosInstance;