import { combineReducers } from "redux";

import themeReducer from "./theme";
import countReducer from "./country";

const rootReducer = combineReducers({ themeReducer, countReducer });

export default rootReducer;
