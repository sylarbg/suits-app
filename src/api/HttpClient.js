import axios from "axios";
import User from '@/api/User'

let HttpClient = axios.create({
  baseURL: "http://localhost"
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