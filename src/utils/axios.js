import axios from "axios";
import qs from "qs";

export const api = axios.create({
  baseURL: 'https://api.artic.edu/api/v1',
  paramsSerializer: params => qs.stringify(params, { arrayFormat: 'brackets' })
});
