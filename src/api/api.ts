import axios from "axios";

export class Api {
  private static getFullUrl(url: string) {
    return process.env.REACT_APP_API_URL + url;
  }

  private static mergeHeader() {
    return {
      "Content-Type": "application/json",
    };
  }

  static post(url: string, data: any = {}) {
    return axios.post(Api.getFullUrl(url), JSON.stringify(data));
  }

  static put(url: string, data: any = {}) {
    return axios.put(Api.getFullUrl(url), JSON.stringify(data));
  }

  static get(url: string, data: any = {}) {
    return axios.get(Api.getFullUrl(url));
  }

  static delete(url: string, data: any = {}) {
    return axios.delete(Api.getFullUrl(url));
  }
}