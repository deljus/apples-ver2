import axios from 'axios';
import { API } from '../config';

class Apple {
  static getAll() {
    return axios.get(API.APPLES);
  }

  static add(apple) {
    return axios.post(API.APPLES, { ...apple });
  }

  static delete(id) {
    return axios.delete(`${API.APPLES}/${id}`);
  }

  static edit(id, apple) {
    return axios.put(`${API.APPLES}/${id}`, { ...apple });
  }
}

export default Apple;
