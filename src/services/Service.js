import http from '../config/http';
import { API_BASE_URL } from '../config';

export default class Services {
  static getAllPokemon = (url) => http.get(url).then(res => res.data);

  static getSinglePokemon = (url) => http.get(url).then(res => res.data);
} 