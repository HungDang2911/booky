import axios from 'axios';

axios.interceptors.request.use(
  (config) => {
    //Request headers
    config.headers = {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    };
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

axios.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    //Handle response errors
    console.log(error)
    if (error.response.status === 401) window.location.href = 'LOGIN_ROUTE';
    return Promise.reject(error);
  }
);

export class Api {
  private static getFullUrl(url: string) {
    return process.env.REACT_APP_API_URL + url;
  }

  static post(url: string, data: any = {}, config: any = {}) {
    return axios.post(Api.getFullUrl(url), JSON.stringify(data), config);
  }

  static put(url: string, data: any = {}) {
    return axios.put(Api.getFullUrl(url), JSON.stringify(data));
  }

  static patch(url: string, data: any = {}) {
    return axios.patch(Api.getFullUrl(url), JSON.stringify(data));
  }

  static get(url: string, data: any = {}) {
    return axios.get(Api.getFullUrl(url));
  }

  static delete(url: string) {
    return axios.delete(Api.getFullUrl(url));
  }
}
