import axios from 'axios';

const instance = axios.create();

instance.interceptors.response.use(null, (rejection) => {
  return Promise.reject(rejection);
});

export default instance;
