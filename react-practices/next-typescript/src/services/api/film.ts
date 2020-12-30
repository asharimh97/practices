import request from "helpers/request";
import { OMDB_API_URL } from "utils/constants";

const FILM_URL = OMDB_API_URL;

const getAllFilms = params => request({ method: "GET", url: FILM_URL, params });

const getSearchFilms = params =>
  request({ method: "GET", url: FILM_URL, params });

export { getAllFilms, getSearchFilms };
