//import { ADD_USER } from "../actions/types";
const DEFAULT_STATE = {
  message: [],
};
var solution;
const DEF_STATE = [];
export const userReducer = (state = {}, action) => {
  const { type, payload } = action;
  switch (type) {
    case "ADD_USER":
      var a = Object.assign({}, state, payload);
      return a;
    case "CURRENT_USER_ID":
      var id = Object.assign({}, state, payload);
      console.log("id is " + id);
      return id;
    case "CURRENT_INDEX":
      var index = Object.assign({}, state, payload);
      return index;
    default:
      return state;
  }
};
export const indexReducer = (state = {}, action) => {
  const { type, payload } = action;
  switch (type) {
    case "CURRENT_INDEX":
      var index = Object.assign({}, state, payload);
      return index;
    default:
      return state;
  }
};
export const recentReducer = (state = DEF_STATE, action) => {
  const { type, payload } = action;
  switch (type) {
    case "ADD_RECENT":
      solution = (obj) => {
        let keys = Object.keys(obj);
        const reqKey = state.findIndex(
          (item) => Object.keys(item)[0] === keys[0]
        );
        if (reqKey != -1) state[reqKey] = obj;
        else state[state.length] = obj;
        return state;
      };
      solution(payload);
      return state;
    default:
      return state;
  }
};
