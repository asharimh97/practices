import request from "../../services/request";
import { OMDB_URL } from "../../utils/constants";

const getAllMovies = async ({ keyword, page = 1 }) => {
  return await request.get(OMDB_URL, {
    params: {
      s: keyword,
      page
    }
  });
};

const getDetailMovie = ({ id }) => {
  return request.get(OMDB_URL, {
    params: {
      i: id
    }
  });
};

export { getAllMovies, getDetailMovie };
