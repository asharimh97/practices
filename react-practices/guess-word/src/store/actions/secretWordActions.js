import axios from "axios";

import { SET_SECRET_WORD } from "../actionTypes";

export const getSecretWord = () => dispatch => {
  return axios
          .get("http://localhost:3030")
          .then(res => {
            dispatch({
              type: SET_SECRET_WORD,
              payload: res.data
            });
          });

};
