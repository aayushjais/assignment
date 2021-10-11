import * as types from "./MainAppActionTypes";

const initialState = {
  fetchingEmployeeList: false,
  fetchingEmployeeListError: false,
 employeeList: [],

};

export const mainReducer = (state = initialState, action) => {
  switch (action.type) {
   // get area list
   case types.GET_EMPLOYEE_REQUEST:
    return { ...state, fetchingEmployeeList: true };
  case types.GET_EMPLOYEE_SUCCESS:
    return {
      ...state,
      fetchingEmployeeList: false,
      employeeList: action.payload,
    };
  case types.GET_EMPLOYEE_FAILURE:
    return {
      ...state,
      fetchingEmployeeList: false,
      fetchingEmployeeListError: true,
    };

    default:
      return state;
  }
};
