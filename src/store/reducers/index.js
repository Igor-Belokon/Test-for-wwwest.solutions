import { combineReducers } from "redux";
import Wall from "./users";
import News from "./news";
import Login from "./login";

export default combineReducers({
  News,
  Wall,
  Login
});
//
