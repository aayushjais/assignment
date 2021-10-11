import { combineReducers } from "redux";
import { mainReducer } from "../Component/MainAppReducer";

const appReducer = combineReducers({
 main: mainReducer,
});

const rootReducer = (state, action) => {
  return appReducer(state, action);
};
export default rootReducer;
