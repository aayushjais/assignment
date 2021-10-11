import * as types from "./MainAppActionTypes";
import axios from "axios";

export const getEmployeeList = () => (dispatch) => {
  dispatch({
    type: types.GET_EMPLOYEE_REQUEST,
  });
  axios
    .get(`https://api.instantwebtools.net/v1/airlines`, [])
    .then((res) => {
      console.log(res);
      dispatch({
        type: types.GET_EMPLOYEE_SUCCESS,
        payload: res.data,
      });
    })
    .catch((err) => {
      console.log(err);
      dispatch({
        type: types.GET_EMPLOYEE_FAILURE,
        payload: err,
      });
    });
};