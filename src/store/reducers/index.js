import { combineReducers } from "redux";

const reducers = combineReducers({
  [require("./films").slice]: require("./films").reducer,
  [require("./characters").slice]: require("./characters").reducer,
  [require("./visited").slice]: require("./visited").reducer,
  [require("./forms").slice]: require("./forms").reducer
});

export default reducers;
