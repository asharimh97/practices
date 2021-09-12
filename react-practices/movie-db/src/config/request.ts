import axios from "axios";
import { API_KEY, API_URL } from "./api";

const request = axios.create({
  baseURL: API_URL,
  params: {
    apikey: API_KEY,
  },
});

request.defaults.params.apikey = API_KEY;

export default request;
