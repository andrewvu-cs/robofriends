import {
  CHANGE_SEARCH_FIELD,
  REQUEST_ROBOTS_PENDING,
  REQUEST_ROBOTS_SUCCESS,
  REQUEST_ROBOTS_FAILED
} from "./constants";
import Axios from "axios";

// payload sending whatever data is needed
export const setSearchField = text => ({
  type: CHANGE_SEARCH_FIELD,
  payload: text
});

export const requestRobots = () => (dispatch) => {
  dispatch({ type: REQUEST_ROBOTS_PENDING});
  Axios.get("https://jsonplaceholder.typicode.com/users")
    .then(res => dispatch({type: REQUEST_ROBOTS_SUCCESS, payload: res.data}))
    .catch(error => dispatch({type: REQUEST_ROBOTS_FAILED, payload: error}))
    ;
};


