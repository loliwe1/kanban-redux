import { combineReducers } from "redux";
import cards from "./cards";
import app from "./app";
import columns from "./columns";

const todoApp = combineReducers({
  cards,
  app,
  columns
});
export default todoApp;
