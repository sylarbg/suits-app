import axios from "axios";
import User from '@/api/User'

let HttpClient = axios.create({
  baseURL: process.env.VUE_APP_API_URL
});


HttpClient.interceptors.response.use(undefined, (err) => {
  return new Promise(function () {   
    if (err.response.status === 401 && err.response.config && !err.config.__isRetryRequest) {      
      User.logout();
    }
    throw err;
  });
});

HttpClient.defaults.withCredentials = true;

export default HttpClient;