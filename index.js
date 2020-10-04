import { createStore } from "redux";
import { combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";
import { userReducer } from "./reducers/index";
import { recentReducer } from "./reducers/index";
const mainReducer = combineReducers({
  form: formReducer,
  userReducer: userReducer,
  recentReducer: recentReducer,
});

const store = createStore(mainReducer);
export default store;
