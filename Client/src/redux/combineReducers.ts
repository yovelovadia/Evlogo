import { combineReducers } from "redux";
import canvasReducer from "./canvasReducer";

const allReducers = combineReducers({ canvasReducer });

export default allReducers;
