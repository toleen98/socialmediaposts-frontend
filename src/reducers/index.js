import { combineReducers } from "redux";
import authReducer from "./authReducers";
import showSidebarReducer from "./showSidebarReducer"

export default combineReducers({
  auth: authReducer,
  showSidebar: showSidebarReducer
});