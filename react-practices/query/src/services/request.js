import axios from "axios";

const API_KEY = process.env.REACT_APP_OMDB_API_KEY;

const request = axios.create({});

request.interceptors.request.use(config => {
  if (config.url.includes("omdbapi.com")) {
    config.params.apikey = API_KEY;
    config.params.r = "json";
  }

  return config;
});

request.interceptors.response.use(response => {
  let res;
  if (response.status === 200) {
    res = response.data;
  }

  return res;
});

export default request;
