import { API_URL } from "config/api";
import request from "config/request";

interface GetAllMovieParams {
  page: number,
  keyword: string
}

const getAllMovies = ({ page, keyword }: GetAllMovieParams) => request.get(API_URL, {
  params: {
    s: keyword,
    page,
  },
});

const getDetailMovie = (movieId: string) => request.get(API_URL, { params: { i: movieId } });

export default {
  getAllMovies,
  getDetailMovie,
};
