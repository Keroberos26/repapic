import axios from 'axios';

const api = axios.create({
  headers: {
    'Content-Type': 'application/json',
  },
});

api.interceptors.request.use(
  (config) => {
    const user = JSON.parse(localStorage.getItem('user'));
    if (user?.token) {
      config.headers.Authorization = `Bearer ${user.token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  },
);

api.interceptors.response.use(
  (res) => {
    return res;
  },
  async (err) => {
    const { config } = err;

    if (config.url !== '/auth/login' && err.response) {
      // Access Token was expired
      if (err.response.status === 401 && !config._retry) {
        config._retry = true;

        try {
          const res = await api.put('/auth/refresh-token');
          let user = JSON.parse(localStorage.getItem('user'));
          user.token = res.data?.token;
          localStorage.setItem('user', JSON.stringify(user));
          return api(config);
        } catch (error) {
          return Promise.reject(error);
        }
      }
    }

    return Promise.reject(err);
  },
);

export default api;
